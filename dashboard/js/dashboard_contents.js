//회차별 학급 평균점수
var ctx = document.getElementById('averageChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1회차', '2회차', '3회차', '4회차', '5회차'],
        datasets: [{
            backgroundColor: [
                '#47A8F7'
            ],
            borderColor:[
                '#47A8F7'
            ],
            borderWidth: 1,
            barThickness: 16, //그래프 굵기
            borderRadius: 4, // 그래프 둥글기
            data:[82, 76, 100, 37, 67],
        }]
    },
    options:{
        indexAxis: 'y', //수평그래프
        responsive: true,
        maintainAspectRatio :false,//그래프의 비율 유지 
        plugins:{
            legend: {display:false}, // 범례 숨김
        },
        scales: {
            x: {
                min: 0,
                max: 100,
                ticks: { stepSize: 20 },
            },
            y: {
                //display: false
            },
        }
    }        
}); 

//학업 성취도율 변화
var ctx = document.getElementById('achievementChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', '3월', '4월', '5월', '6월', '7월', '8월'], //맨앞에 0값
        datasets: [{
            backgroundColor: 'rgb(133, 196, 255)',
            borderWidth: 3,
            borderColor: 'rgb(133, 196, 255)',
            barThickness: 20,
            data: [0, 20, 30, 20, 50, 40, 50],
        }]
    },
    options:{
        responsive: true,
        maintainAspectRatio :false,//그래프의 비율 유지 
        plugins:{
            legend: {display:false}, // 범례 숨김
        },
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: { stepSize: 20 },
            },
            x: {
                //display: false
            },
        }
    }        
}); 

document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.querySelector('.badge-alert .close');
    const alertBox = document.querySelector('.badge-alert.slim.infomation');
    const alertArea = document.querySelector('.alert-area');

    if (closeButton && alertBox && alertArea) {
        closeButton.addEventListener('click', function () {
            // badge-alert를 주석 처리한 문자열 생성
            const comment = document.createComment(alertBox.outerHTML);

            // 기존 요소 제거 및 주석 삽입
            alertBox.parentNode.replaceChild(comment, alertBox);

            // alert-area에 empty 클래스 추가
            alertArea.classList.add('empty');
        });
    }
});

// top_btn
$(function () {
    $.fn.floating = function(){
        $('.scroll-top').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, 300);
        });
    }
    $.fn.floating();
});