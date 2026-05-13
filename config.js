/**
 * Korean Traditional Wedding Invitation Configuration
 * 한국 전통 모바일 청첩장 설정
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김치영",
    nameEn: "Groom",
    father: "김달원",
    mother: "조주연",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: { 
    name: "정다은",
    nameEn: "Bride",
    father: "정채성",
    mother: "박성희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-06-13",
    time: "12:00",
    venue: ""
  },

  // ── 인사말 ──
  greeting: {
    title: "2026년 6월의 어느 날",
    content: "초록빛의 싱그러운 계절에\n저희 두 사람이 사랑의 결실을 맺고자 합니다.\n\n맑은 날엔 함께 웃고 궂은 날엔\n서로의 우산이 되어주며,\n시원한 나무 그늘처럼 편안하게\n쉴 수 있는 가정을 꾸려나가겠습니다.\n\n지금까지 곁에서 아껴주신 고마운 분들을\n모시고 혼인의 예를 갖추어야 하나,\n두 사람의 가치관에 따라 양가 가족만 모시고\n작은 결혼식을 올리게 되었습니다.\n직접 인사를 드리지 못하는 점\n넓은 마음으로 양해 부탁드립니다.\n\n멀리서 마음으로 축하해 주시면\n더없는 기쁨으로 간직하고,\n예쁘게 사는 모습으로 보답하겠습니다."
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김치영 ♥ 정다은 결혼합니다",
    description: "2026년 6월 13일"
  }
};
