export function calculateWidth(windowWidth: number): number {
    const baseWidth = 200; // 1920px 환경에서의 기본값
    const referenceWidth = 1920; // 기준이 되는 화면 너비 (1920px)

    // 비율을 완화하는 조정값 (0.5 정도로 조정하면 줄어드는 속도를 완화)
    const scaleFactor = 0.5;

    // 현재 windowWidth와 기준값인 referenceWidth의 비율로 width 계산
    // 비율을 조정해 줄어드는 속도를 완화함
    const width = (windowWidth / referenceWidth) ** scaleFactor * baseWidth;

    return Math.max(width, 30); // 최소 30px을 설정
}

export function calculateHeight(documentHeight: number): number {
    const baseHeight = 50; // 기본 높이값, 전체 문서 높이의 비율로 계산
    const referenceHeight = document.body.scrollHeight; // document의 전체 높이를 기준으로 설정

    // 비율을 완화하는 조정값 (0.5 정도로 조정하면 줄어드는 속도를 완화)
    const scaleFactor = 0.5;

    // 현재 documentHeight와 기준값인 referenceHeight의 비율로 height 계산
    const height = (documentHeight / referenceHeight) ** scaleFactor * baseHeight;

    return Math.max(height, 20); // 최소 20px을 설정
}

function updateElementDimensions(width: number, height: number) {
    const elements = document.querySelectorAll<HTMLDivElement>('#elementWrap'); // id가 elementWrap인 모든 요소 선택
    elements.forEach((element) => {
        element.style.width = `${width}px`;
        element.style.height = `${height}px`;
    });
}

(function initializeResizeListener() {
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        const documentHeight = document.documentElement.scrollHeight;

        // windowWidth와 documentHeight를 기반으로 width, height 계산
        const width = calculateWidth(windowWidth);
        const height = calculateHeight(documentHeight);

        // 각 요소에 대해 width 및 height 업데이트
        updateElementDimensions(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 초기 실행 시 한번 호출
    handleResize();
})();
