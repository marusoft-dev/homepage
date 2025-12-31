<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">cat /legal/terms-of-service.txt</span>
    </div>

    <div class="output">
      <h1>[ 이용약관 ]</h1>
      <p>마루소프트(이하 "회사"라 합니다)가 제공하는 모든 서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
      
      <h2># 제1장 총칙</h2>
      <h3>제1조 (목적)</h3>
      <p>...</p>

      <p class="appendix">부칙: 본 약관은 2025년 12월 31일부터 시행됩니다.</p>
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

h1, h2, h3 {
  color: var(--krds-blue);
  font-weight: bold;
  margin-bottom: 1.5rem;
}

h1 { font-size: 1.5rem; }
h2 { font-size: 1.2rem; margin-top: 2rem; }
h3 { font-size: 1.1rem; margin-top: 1.5rem; color: var(--krds-text-primary); }

p, li {
  line-height: 1.7;
  margin-bottom: 1rem;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 0.5rem;
}

.appendix {
  margin-top: 4rem;
  font-style: italic;
}
</style>
