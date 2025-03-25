// onPerfEntry : 성능 데이터가 수집되었을 때 실행할 콜백 함수
const reportWebVitals = onPerfEntry => {
  // onPerfEntry 값이 존재하는지 확인 && onPerfEntry가 함수인지 확인
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // import('web-vitals') : 동적으로 web-vitals를 임포트 
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 레이아웃 이동량
      getCLS(onPerfEntry);
      // 첫 사용자 상호작용까지의 지연 시간
      getFID(onPerfEntry);
      // 최초로 콘텐츠가 화면에 렌더링된 시점
      getFCP(onPerfEntry);
      // 가장 큰 콘텐츠가 렌더링된 시점
      getLCP(onPerfEntry);
      // 서버가 첫 바이트를 응답할 때까지 걸린 시간
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
