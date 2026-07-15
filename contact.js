const form = document.querySelector("[data-contact-form]");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const phonePreferenceLabels = {
      sms: "短信",
      call: "电话",
      both: "都可以",
    };
    const phonePreference = phonePreferenceLabels[data.get("phonePreference")] || "未填写";
    const lines = [
      `称呼：${data.get("name") || "未填写"}`,
      `微信：${data.get("wechat") || "未填写"}`,
      `邮箱：${data.get("email") || "未填写"}`,
      `手机号：${data.get("phone") || "未填写"}`,
      `手机联系偏好：${phonePreference}`,
      `当前身份：${data.get("role") || "未填写"}`,
      `当前阶段或最卡问题：${data.get("problem") || "未填写"}`,
      "",
      "补充说明：",
      data.get("message") || "无",
    ];

    const subject = `消费品项目咨询 - ${data.get("name")}`;
    const mailto = `mailto:aspenlu@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    const status = form.querySelector("[data-form-status]");

    if (status) {
      status.textContent = "正在打开邮件应用。请在邮件中确认内容并点击发送。";
    }

    window.location.href = mailto;
  });
}
