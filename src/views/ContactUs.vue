<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">./contact-us.sh</span>
    </div>

    <div class="output">
      <h1>[ 문의하기 ]</h1>
      <p>궁금한 점이 있으시거나 마루소프트의 서비스에 대해 더 자세히 알고 싶으시다면 언제든지 문의해주십시오.</p>
      <p>저희 전문가 팀이 신속하게 답변해 드리겠습니다.</p>

      <h2># 연락처 정보</h2>
      <p><strong>Email:</strong> contact@marusoft.dev</p>
      <p><strong>Phone:</strong> 070-1234-5678</p>
      <p><strong>Address:</strong> 대한민국 서울특별시 강남구 테헤란로 123 마루빌딩 10층</p>

      <h2># 문의 양식</h2>
      <form class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="button-primary">[ Send Message ]</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Form submission logic would go here
</script>

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

.form-group input,
.form-group textarea {
  width: 100%;
  background-color: var(--krds-surface);
  border: 1px solid var(--krds-gray-light);
  color: var(--krds-text-primary);
  padding: 0.8rem;
  font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--krds-blue);
  outline: none;
}

.button-primary {
  background-color: var(--krds-blue);
  color: var(--krds-surface);
  border: none;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-family: inherit;
  font-weight: bold;
}

.button-primary:hover {
  filter: brightness(120%);
}
</style>

