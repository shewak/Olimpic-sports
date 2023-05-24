// average age 
var ctx = document.getElementById('age').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Male','Female'],
        datasets: [{
            label: 'Average Age Of Male And Female',
            data: [40,36,50],
            backgroundColor: 'blue',
            borderWidth: 1
        }]
    },
    options : {
        plugins : {
            legend : { display : false },
            title : {
                display : true,
                text : 'Average Age Of Male And Female'
        }
        }
    }
    });

// Avgerage bmi

new Chart(document.getElementById("bmi"),{
    type : "bubble",
    data : {
        datasets : [{
            label : "Average BMI",
            data : [{x:18,y:31,r:5},
                {x:19,y:29,r:5},
                {x:20,y:31,r:5},
                {x:21,y:28,r:5},
                {x:22,y:31,r:5},
                {x:23,y:31,r:5},
                {x:24,y:29,r:5},
                {x:25,y:30,r:5},
                {x:26,y:29,r:5},
                {x:27,y:29,r:5},
                {x:28,y:29,r:5},
                {x:29,y:29,r:5},
                {x:30,y:31,r:5},
                {x:31,y:30,r:5},
                {x:32,y:32,r:5},
                {x:33,y:31,r:5},
                {x:34,y:30,r:5},
                {x:35,y:31,r:5},
                {x:36,y:29,r:5},
                {x:37,y:31,r:5},
                {x:38,y:29,r:5},
                {x:39,y:30,r:5},
                {x:40,y:30,r:5},
                {x:41,y:32,r:5},
                {x:42,y:30,r:5},
                {x:43,y:30,r:5},
                {x:44,y:31,r:5},
                {x:45,y:30,r:5},
                {x:46,y:31,r:5},
                {x:47,y:31,r:5},
                {x:48,y:32,r:5},
                {x:49,y:30,r:5},
                {x:50,y:31,r:5},
                {x:51,y:32,r:5},
                {x:52,y:33,r:5},
                {x:53,y:30,r:5},
                {x:54,y:31,r:5},
                {x:55,y:32,r:5},
                {x:56,y:32,r:5},
                {x:57,y:31,r:5},
                {x:58,y:33,r:5},
                {x:59,y:31,r:5},
                {x:60,y:30,r:5},
                {x:61,y:33,r:5},
                {x:62,y:32,r:5},
                {x:63,y:32,r:5},
                {x:64,y:33,r:5}],
            backgroundColor: '#d51d8d',
            bordorColor : 'blue'
        }]

    },
    options : {
        plugins : {
            legend : { display : false },
            title : {
                display : true,
                text : "BMI of a person based on their age"
            }
        }
    }
})

new Chart(document.getElementById("child").getContext('2d'),{
    type : "bar",
    data : {
        labels : [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
        datasets : [{
            label : "Child",
            data : [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
            backgroundColor : 'purple',
        }]
    },
    options : {
        plugins : {
            legend : { display: false },
            title : {
                display : true,
                text : "Average Children By Age"
            }
        }
    }
})

new Chart(document.getElementById("region").getContext('2d'),{
    type : 'bar',
    data : {
        labels : ['North East','North West','South West','South East'],
        datasets : [{
            label : "Average Age By Region",
            data : [40,35,36,50],
            backgroundColor : ['orangered','aqua','purple','pink']
        }]
    },
    options : {
        plugins : {
            legend : { display : false },
            title :{
                display : true,
                text : "Average Age By Region"
            }
        }
    }
})