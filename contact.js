const form = document.querySelector("[data-contact-form]");
const isEnglish = document.documentElement.lang.startsWith("en");

if (form) {
  const status = form.querySelector("[data-form-status]");
  const submitButton = form.querySelector("[data-submit-button]");
  const contactFields = ["wechat", "email", "phone"]
    .map((name) => form.elements.namedItem(name))
    .filter(Boolean);
  const emailField = form.elements.namedItem("email");
  const labels = isEnglish
    ? {
        submitting: "Submitting your project details...",
        success: "Received. I will first assess whether your project is a fit for a further conversation.",
        error: "Your submission did not go through. Please email aspenlu@proton.me directly.",
        contactRequired: "Please provide at least one way to contact you: WeChat, email, or phone.",
        submit: "Submit project details",
        retry: "Try again",
      }
    : {
        submitting: "正在提交项目资料...",
        success: "已收到。我会先判断你的项目是否适合继续沟通。",
        error: "提交没有成功，请直接发邮件到 aspenlu@proton.me。",
        contactRequired: "请至少留下一种联系方式：微信、邮箱或手机号。",
        submit: "提交项目资料",
        retry: "重新提交",
      };

  contactFields.forEach((field) => {
    field.addEventListener("input", () => {
      if (emailField && contactFields.some((input) => input.value.trim())) {
        emailField.setCustomValidity("");
      }
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (emailField) {
      emailField.setCustomValidity("");
    }
    if (!form.reportValidity()) {
      return;
    }

    if (!contactFields.some((field) => field.value.trim())) {
      if (emailField) {
        emailField.setCustomValidity(labels.contactRequired);
        emailField.reportValidity();
      }
      if (status) {
        status.textContent = labels.contactRequired;
        status.classList.remove("is-success");
        status.classList.add("is-error");
      }
      return;
    }

    if (status) {
      status.textContent = labels.submitting;
      status.classList.remove("is-error", "is-success");
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = labels.submitting;
    }

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      form.reset();
      if (status) {
        status.textContent = labels.success;
        status.classList.add("is-success");
      }
    } catch (error) {
      if (status) {
        status.textContent = labels.error;
        status.classList.add("is-error");
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = status?.classList.contains("is-error") ? labels.retry : labels.submit;
      }
    }
  });
}
