<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">cat /legal/privacy-policy.txt</span>
    </div>

    <div class="output">
      <h1>[ 개인정보처리방침 ]</h1>
      <p>마루소프트(이하 ‘회사’라 한다)는 개인정보보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.</p>

      <h3># 제1조 (개인정보의 처리 목적)</h3>
      <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
      
      <!-- ... (rest of the content) ... -->

      <h3># 제9조 (개인정보 처리방침의 변경)</h3>
      <p>이 개인정보처리방침은 2025년 12월 31일부터 적용됩니다.</p>
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
  color: var(--krds-green);
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

h1, h3 {
  color: var(--krds-blue);
  font-weight: bold;
  margin-bottom: 1.5rem;
}

h1 { font-size: 1.5rem; }
h3 { font-size: 1.1rem; margin-top: 1.5rem; color: var(--krds-text-primary); }

p, li, ol {
  line-height: 1.7;
  margin-bottom: 1rem;
}

ol, ul {
  padding-left: 20px;
}

li {
  margin-bottom: 0.5rem;
}
</style>
