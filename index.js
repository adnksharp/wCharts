window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        zoomEnabled: true,
        theme: "dark2",
        axisX: {
            title: "Temperatura (°C)",
            maximum: 120,
            minimum: -40
        },
        axisY: {
            title: "Voltaje de salida (V)",
            gridThickness: 0,
            lineThickness: 1
        },
        axisY2: {
            gridThickness: 0
        },
        legend: {
            verticalAlign: "top",
            dockInsidePlotArea: true
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "TMP35",
            dataPoints: [
                { x: 10, y: 0.1 },
                { x: 125, y: 2 }
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            showInLegend: true,
            name: "TMP36",
            dataPoints: [
                { x: -40, y: 0.1 },
                { x: 125, y: 2 }
            ]
        },
        {
            type: "line",
            axisYType: "secondary",
            showInLegend: true,
            name: "TMP37",
            dataPoints: [
                { x: 5, y: 0.1 },
                { x: 100, y: 2 }
            ]
        }]
    });
    chart.render();
}