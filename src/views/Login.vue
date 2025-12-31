<template>
  <div class="login-container">
    <div v-if="!auth.sent">
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./request-auth-code.sh --to-admin-email</span>
      </div>
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <button @click="sendAuthCode" class="terminal-button">[ Send Code to Admin ]</button>
      </div>
    </div>

    <div v-if="auth.sent">
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <span class="command">./verify-auth-code.sh --code={{ code }}</span>
      </div>
      <div class="output">
        <p>관리자 이메일로 인증 코드가 전송되었습니다.</p>
        <p>(시뮬레이션을 위해 브라우저 콘솔에서 코드를 확인하세요.)</p>
      </div>
      <div class="input-line">
        <label for="code">Enter code:</label>
        <input
          type="text"
          id="code"
          v-model="code"
          @keyup.enter="verifyCode"
          class="terminal-input"
        />
      </div>
      <div v-if="errorMessage" class="output error">
        <p>{{ errorMessage }}</p>
      </div>
      <div class="terminal-line">
        <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
        <button @click="verifyCode" class="terminal-button">[ Login ]</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth';

const code = ref('');
const errorMessage = ref('');
const auth = reactive({
  sent: false,
  code: '',
});

const router = useRouter();
const { login } = useAuth(); // Use the auth composable

const sendAuthCode = () => {
  // Simulate sending an authentication code to the fixed admin email
  const simulatedCode = Math.floor(100000 + Math.random() * 900000).toString();
  auth.code = simulatedCode;
  auth.sent = true;

  console.log(`%c[Auth Simulation] Your verification code is: ${simulatedCode}`, 'color: #4CAF50; font-weight: bold; font-size: 14px;');
  
  errorMessage.value = '';
};

const verifyCode = () => {
  if (code.value === auth.code) {
    alert('Login successful!');
    login(); // Call the global login function
    router.push('/admin'); // Redirect to admin page
  } else {
    errorMessage.value = 'error: Invalid authentication code. Please try again.';
  }
};
</script>

<style scoped>
.login-container {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
}

.terminal-line {
  line-height: 1.5;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prompt-user {
  color: var(--krds-text-username);
  font-weight: bold;
}

.prompt-symbol {
  color: var(--krds-text-primary);
  margin-right: 0.5rem;
}

.command {
  color: var(--krds-text-primary);
  white-space: pre-wrap;
}

.output {
  padding-left: 1rem;
  color: var(--krds-text-secondary);
  margin-bottom: 1rem;
}

.output.error p {
    color: #ff6b6b;
}

.input-line {
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
}

.input-line label {
  margin-right: 1rem;
  color: var(--krds-text-secondary);
}

.terminal-input {
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-family: inherit;
  color: #333;
  width: 250px;
}

.terminal-button {
  background: none;
  border: 1px solid var(--krds-blue);
  color: var(--krds-blue);
  padding: 0.5rem 1rem;
  font-family: inherit;
  cursor: pointer;
  font-weight: bold;
}

.terminal-button:hover {
  background-color: var(--krds-blue);
  color: white;
}
</style>
