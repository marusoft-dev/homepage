<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const handleSubmit = () => {
  const recipient = 'contact@marusoft.dev';
  const subject = `Contact from ${name.value}`;
  const body = `이름: ${name.value}\n이메일: ${email.value}\n\n내용:\n${message.value}`;
  
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
};
</script>

<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">./contact-us.sh</span>
    </div>

    <div class="output">
      <h1>[ 문의하기 ]</h1>
      <p>궁금한 점이 있으시거나 마루소프트의 서비스에 대해 더 자세히 알고 싶으시다면 언제든지 문의해주십시오.</p>
      <p>신속하게 답변해 드리겠습니다.</p>

      <h2># 연락처 정보</h2>
      <p><strong>Email:</strong> contact@marusoft.dev</p>

      <h2># 문의 양식</h2>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" v-model="message" required></textarea>
        </div>
        <button type="submit" class="btn">[ Send Message ]</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
}

.terminal-line {
  line-height: 1.5;
  margin-bottom: 2rem;
}

.prompt-user {
  color: var(--krds-text-username); /* Black */
  font-weight: bold;
}

.prompt-symbol {
  color: var(--krds-text-primary);
  margin-right: 0.5rem;
}

.command {
  color: var(--krds-text-primary);
}

.output {
  color: var(--krds-text-secondary);
}

h1, h2 {
  color: var(--krds-blue);
  font-weight: bold;
  margin-bottom: 1.5rem;
}

h1 { font-size: 1.5rem; }
h2 { font-size: 1.2rem; margin-top: 2rem; }

p {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.contact-form {
  margin-top: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--krds-text-primary);
}
</style>

