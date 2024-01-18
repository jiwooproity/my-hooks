# my-hooks

실제 작성해 본 훅 중에 도움을 받았던 함수들을 작성했습니다.

## use-loading.ts

동기적으로 처리될 함수들을 비동기적으로 실행하여 모두가 완료되면 동기적으로 상태를 업데이트하는 함수입니다.  
Return Value : [Function, boolean]  
(() => Promise<void>)[] 형태로 동기적 함수들을 입력하고, 함수 내에서 비동기적으로 처리 후 로딩을 동기적으로 처리합니다.  
모든 동기 함수를 동시에 처리하고 처리가 완료될 때까지 비동기적으로 로딩 상태를 업데이트합니다.

## use-local-storage.ts

## use-audio.ts
