<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">./show-case-studies.sh</span>
    </div>
    <div class="output">
      <h1>[ 구축사례 ]</h1>
      <p>여기에 다양한 구축사례 내용이 들어갈 예정입니다.</p>
      <p>저희 마루소프트는 고객의 비즈니스 가치를 극대화하는 맞춤형 솔루션을 제공합니다. 각 사례는 고객사의 당면 과제를 어떻게 해결하고, 어떤 성과를 달성했는지 상세하게 다룹니다.</p>

      <h2># 주요 프로젝트</h2>
      <ul>
        <li><a href="#">- 대규모 레거시 시스템 현대화 프로젝트 (A사)</a></li>
        <li><a href="#">- 클라우드 기반 데이터 플랫폼 구축 (B사)</a></li>
        <li><a href="#">- 고성능 웹 서비스 아키텍처 설계 (C사)</a></li>
      </ul>

      <h2># 마루소프트와 함께 성장하세요</h2>
      <p>저희의 전문성과 경험이 고객사의 성공에 기여할 수 있도록 언제든지 문의해주십시오.</p>
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

ul {
  list-style: none;
  padding-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
}

a {
  color: var(--krds-text-secondary);
  text-decoration: none;
}

a:hover {
  color: var(--krds-blue);
  text-decoration: underline;
}
</style>
