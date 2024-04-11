// 1) XHR implementation
// const xhr = new XMLHttpRequest();
// xhr.open('GET', "assets/data/data.json");
// xhr.send();

// xhr.addEventListener('load', function(){
//     try {
//         console.log("XHR response:", this.responseText);
//     } catch (error) {
//         console.log("Error: ", error)
//     }
// })

// 2) Fetching Data using Fetch
// fetch("assets/data/data.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(errors => console.log("errors: ", errors))

// 3) Async / Await Demo
async function fetchJsonData(){
    try {
        const overviewHolder = document.getElementById('cardOneOverview');
        const trendHolder = document.getElementById('cardTwoTrend');
        const utHolder = document.getElementById('cardThreeUnresolvedTickets');
        const tasksHolder = document.getElementById('cardFourTasks');

        const temp = await fetch("assets/data/data.json")
        const data = await temp.json();
        // Overview
        data.Overview.forEach(overviewData => {
            const addOverviewCardData =document.createElement('article');
            addOverviewCardData.className = "col-12 col-sm-5 col-md-2";
            addOverviewCardData.innerHTML = `   <div class="card text-center bg-white rounded-2 p-4">
                                                    <h5 class="card-tittle fw-bold">${overviewData.status}</h5>
                                                    <h1 class="card-text text-dark mt-3 fw-bold">${overviewData.value}</h1>
                                                </div>
                                            `
            overviewHolder.append(addOverviewCardData);
        });

        // Trend 
        data.Trends.forEach(trendsData => {
            const addTrendsCardData =document.createElement('div');
            addTrendsCardData.className = "p-4 border text-center";
            addTrendsCardData.innerHTML = ` <h6 class="text-secondary opacity-75 fw-bold">${trendsData.status}</h6>
                                            <h3 class="fw-bold">${trendsData.value}</h3>`
            trendHolder.append(addTrendsCardData);
        });
        
        // Unresolved Tickets
        data.unresolvedTickets.forEach(utData => {
            const addUTCardData =document.createElement('div');
            addUTCardData.className = "d-flex justify-content-between align-items-center border-bottom";
            addUTCardData.innerHTML = ` <p class="my-3 fw-medium">${utData.status}</p>
                                        <p class="my-3 text-end text-secondary">${utData.value}</p>`
            utHolder.append(addUTCardData);
        });

        // Tasks
        data.tasks.forEach(taskData => {
            const addTaskCardData =document.createElement('div');
            addTaskCardData.className = "d-flex justify-content-between align-items-center border-bottom";
            addTaskCardData.innerHTML = ` <p class="my-3 fw-medium"><i class="${taskData.classes} me-2"></i> ${taskData.status}</p>
        <div class="text-end">
            <button class="btn ${taskData.btn} btn-sm">${taskData.value}</button>
        </div>`
            tasksHolder.append(addTaskCardData);
        });



    }    catch (error) {
        console.log("error: ", error);
    }
}
fetchJsonData();