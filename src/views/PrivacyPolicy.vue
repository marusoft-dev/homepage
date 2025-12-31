<template>
  <div class="content-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">./show-privacy-policy.sh</span>
    </div>

    <div class="output">
      <h1>[ 개인정보처리방침 ]</h1>
      <p>마루소프트 (이하 "회사")는 이용자의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하고 있습니다. 본 개인정보처리방침은 회사가 제공하는 홈페이지에 적용됩니다.</p>

      <h2>총칙</h2>
      <p>본 홈페이지는 회원가입 및 로그인 기능이 없으며, 홈페이지 이용 과정에서 이용자의 어떠한 개인정보도 수집, 저장, 처리하지 않음을 기본 원칙으로 합니다. 따라서 본 개인정보처리방침은 법적 고지 의무를 다하기 위한 것이며, 실제 개인정보 처리와는 무관할 수 있습니다.</p>

      <h2>제1조 (개인정보의 수집 및 이용 목적)</h2>
      <p>해당 없음. 본 홈페이지는 이용자를 식별하거나 개인에 관한 정보를 수집하지 않습니다.</p>

      <h2>제2조 (수집하는 개인정보 항목 및 수집 방법)</h2>
      <p>해당 없음. 본 홈페이지는 어떠한 개인정보도 수집하지 않습니다. 이용자는 어떠한 개인정보도 제공할 필요 없이 홈페이지를 자유롭게 이용할 수 있습니다.</p>

      <h2>제3조 (개인정보의 처리 및 보유 기간)</h2>
      <p>해당 없음. 수집·저장하는 개인정보가 없으므로 보유 및 처리 기간이 존재하지 않습니다.</p>

      <h2>제4조 (개인정보의 제3자 제공)</h2>
      <p>해당 없음. 회사는 어떠한 개인정보도 보유하고 있지 않으므로 제3자에게 제공할 정보가 없습니다.</p>

      <h2>제5조 (개인정보 자동 수집 장치의 설치·운영 및 그 거부에 관한 사항)</h2>
      <p>회사는 이용자의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등 개인정보를 자동으로 수집하는 장치를 설치, 운용하지 않습니다. 따라서 이용자는 쿠키 설치에 대한 선택권이 없으며, 이로 인한 추적의 우려가 없습니다.</p>
      <p>홈페이지의 정상적인 기능을 위해 필수적인 기술적 세션 정보가 일시적으로 사용될 수 있으나, 이는 개인을 식별하는 데 사용되지 않으며 브라우저 종료 시 파기됩니다.</p>
      
      <h2>제6조 (Tor(.onion) 네트워크 접속에 관한 안내)</h2>
      <p>본 홈페이지는 Tor 네트워크를 통해 .onion 주소로 접속할 수 있습니다. Tor 네트워크를 통해 접속 시, 이용자의 IP 주소는 암호화되고 익명화되므로 회사는 이용자의 접속 위치나 신원을 알 수 없습니다. 이는 이용자의 익명성을 최대한 보장하기 위함입니다.</p>

      <h2>제7조 (개인정보 보호책임자)</h2>
      <p>회사는 개인정보를 처리하지 않으므로 법적인 의미의 개인정보 보호책임자를 지정하지 않습니다. 다만, 홈페이지 관련 문의는 다음 연락처로 하실 수 있습니다.</p>
      <ul>
        <li>문의: contact@marusoft.dev</li>
      </ul>
      <p>홈페이지 이용과 관련하여 발생하는 모든 민원은 위 연락처로 신고하실 수 있으며, 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</p>

      <h2>제8조 (고지의 의무)</h2>
      <p>현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 팝업창을 통해 고지할 것입니다.</p>

      <p>부칙: 본 개인정보처리방침은 2025년 12월 31일부터 적용됩니다.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  color: var(--krds-text-username);
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
  padding-left: 1rem;
  color: var(--krds-text-secondary);
}

.output h1 {
  color: var(--krds-blue);
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.output h2 {
  color: var(--krds-blue);
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
}

.output p, .output li {
  line-height: 1.7;
  margin-bottom: 1rem;
}

.output ul {
  list-style-type: none;
  padding-left: 1rem;
}
</style>
