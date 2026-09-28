// 마키 등에서 거리 걷기 섹션의 특정 가게로 이동 요청 (Street가 받아서 처리)
export const STREET_GO_EVENT = "street:go";

export function goToCase(id: string) {
  window.dispatchEvent(new CustomEvent(STREET_GO_EVENT, { detail: id }));
}
