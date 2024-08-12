function calculate0() {
    // 入力された数値を取得
    let num1 = parseFloat(document.getElementById('product_number1').value);
    let num2 = parseFloat(document.getElementById('product_number2').value);

    let binary_operator = document.getElementsByName("calculate_binary");
    let selected_binary = null;
    for (let i = 0; i < binary_operator.length; i++){
        if (binary_operator[i].checked) {
            selected_binary = binary_operator[i].value;
            break;
        }
    }


    // 数値が入力されているか確認
    if (isNaN(num1) || isNaN(num2)) {
        alert("数値を入力してください．")
    } else {
        console.log(selected_binary);
        //数値の二項演算
        let result;
        switch (selected_binary){
            case "0":
                result = num1 + num2;
                alert("和:" + result);
                break;
            case "1":
                result = num1 - num2;
                alert("差:" + result);
                break;
            case "2":
                result = num1 * num2;
                alert("積:" + result);
                break;
            case "3":
                result = num1 / num2;
                alert("商:" + result);
                break;
        }
    }
}




// グローバルスコープでチャートインスタンスを追跡する変数
let chartInstance = null;

function problem0() {
    // オイラー法を用いてdy/dt = kyを数値的に解く関数
    function eulerMethod(k, y0, t0, dt, tMax) {
        let t = t0;
        let y = y0;
        const data = [{x: t, y: y}];
        
        while (t <= tMax) {
            y = y + dt * k * y;  // オイラー法の更新式
            t = t + dt;
            data.push({x: t, y: y});
        }
        
        return data;
    }

    // 正確な解を計算する関数
    function solved_0(k, t0, dt, tMax) {
        let t = t0;
        let y = 1;
        const data = [{x: t, y: y}];
    
        while (t <= tMax) {
            y = Math.exp(k * t);
            t = t + dt;
            data.push({x: t, y: y});
        }
    
        return data;
    }

    // パラメータを取得
    let k = parseFloat(document.getElementById("problem0_k").value);   // 係数k
    const y0 = 1;    // 初期条件y(0) = y0
    const t0 = 0;    // 開始時間
    let dt = parseFloat(document.getElementById("problem0_dt").value);  // 時間刻み
    const tMax = 10; // 最大時間

    // 入力の検証
    if (isNaN(k) || isNaN(dt)) {
        alert("数値を入力してください．");
        return;
    }

    // オイラー法でデータを生成
    const eulerData = eulerMethod(k, y0, t0, dt, tMax);
    const solved_0Data = solved_0(k, t0, dt, tMax);

    // キャンバスの取得
    let canvasParent = document.getElementById("canvasParent0");
    let canvas = document.getElementById("canvas");

    let resize = () => {
        // 既存のチャートがあれば破棄する
        if (chartInstance) {
            chartInstance.destroy();
        }

        // キャンバスのサイズを親要素に合わせて変更
        canvas.width = canvasParent.clientWidth;
        canvas.height = canvasParent.clientHeight;

        // 新しいチャートを作成
        const ctx = canvas.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'dy/dt = ky (Euler Method)',
                        data: eulerData,
                        borderColor: 'blue',
                        fill: false,
                    },
                    {
                        label: "y = e^(kt)",
                        data: solved_0Data,
                        borderColor: "red",
                        fill: false,
                    }
                ]
            },
            options: {
                animation: false,  // アニメーションを無効にする
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom',
                        title: {
                            display: true,
                            text: 'Time (t)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'y(t)'
                        }
                    }
                }
            }
        });
    };

    // 初回の描画
    resize();

    // ウィンドウのリサイズイベントにリスナーを追加して、リサイズ時にグラフを再描画
    window.addEventListener('resize', resize);
}







// function problem1() {
//     // オイラー法を用いてd^2y/dt^2 = -\omega^2 yを数値的に解く関数
//     function eulerMethod1(omega, y0, t0, dt, tMax) {
//         let t = t0;
//         let y = y0;
//         const data = [{x: t, y: y}];
        
//         while (t <= tMax) {
//             y = y + dt * k * y;  // オイラー法の更新式
//             t = t + dt;
//             data.push({x: t, y: y});
//         }
        
//         return data;
//     }

//     // 正確な解を計算する関数
//     function solved_0(k, t0, dt, tMax) {
//         let t = t0;
//         let y = 1;
//         const data = [{x: t, y: y}];
    
//         while (t <= tMax) {
//             y = Math.exp(k * t);
//             t = t + dt;
//             data.push({x: t, y: y});
//         }
    
//         return data;
//     }

//     // パラメータを取得
//     let k = parseFloat(document.getElementById("problem0_k").value);   // 係数k
//     const y0 = 1;    // 初期条件y(0) = y0
//     const t0 = 0;    // 開始時間
//     let dt = parseFloat(document.getElementById("problem0_dt").value);  // 時間刻み
//     const tMax = 10; // 最大時間

//     // 入力の検証
//     if (isNaN(k) || isNaN(dt)) {
//         alert("数値を入力してください．");
//         return;
//     }

//     // オイラー法でデータを生成
//     const eulerData = eulerMethod(k, y0, t0, dt, tMax);
//     const solved_0Data = solved_0(k, t0, dt, tMax);

//     // キャンバスの取得
//     let canvasParent = document.getElementById("canvasParent0");
//     let canvas = document.getElementById("canvas");

//     let resize = () => {
//         // 既存のチャートがあれば破棄する
//         if (chartInstance) {
//             chartInstance.destroy();
//         }

//         // キャンバスのサイズを親要素に合わせて変更
//         canvas.width = canvasParent.clientWidth;
//         canvas.height = canvasParent.clientHeight;

//         // 新しいチャートを作成
//         const ctx = canvas.getContext('2d');
//         chartInstance = new Chart(ctx, {
//             type: 'line',
//             data: {
//                 datasets: [
//                     {
//                         label: 'dy/dt = ky (Euler Method)',
//                         data: eulerData,
//                         borderColor: 'blue',
//                         fill: false,
//                     },
//                     {
//                         label: "y = e^(kt)",
//                         data: solved_0Data,
//                         borderColor: "red",
//                         fill: false,
//                     }
//                 ]
//             },
//             options: {
//                 animation: false,  // アニメーションを無効にする
//                 scales: {
//                     x: {
//                         type: 'linear',
//                         position: 'bottom',
//                         title: {
//                             display: true,
//                             text: 'Time (t)'
//                         }
//                     },
//                     y: {
//                         title: {
//                             display: true,
//                             text: 'y(t)'
//                         }
//                     }
//                 }
//             }
//         });
//     };

//     // 初回の描画
//     resize();

//     // ウィンドウのリサイズイベントにリスナーを追加して、リサイズ時にグラフを再描画
//     window.addEventListener('resize', resize);
// }
