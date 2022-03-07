let upload = []

// deklarasi Value dan varible
    function addBlog(){
        let projectName = document.getElementById('project-name').value;
        let description = document.getElementById('input-description').value;
        let image = document.getElementById('upload-image').files[0];
        let startDateProject = new Date(document.getElementById("startDate").value);
        let endDateProject = new Date(document.getElementById("endDate").value);
        let node = document.getElementById('nodeJs').checked;
        let next = document.getElementById('nextJs').checked;
        let react = document.getElementById('reactJs').checked;
        let type = document.getElementById('typeScript').checked;


        image = URL.createObjectURL(image)

    // Parameter
        let Parameter = {
            projectName: projectName,
            description: description,
            image: image,
            postedAt: new Date(),
            startDateProject, endDateProject,
            node: node, next: next, react: react, type: type
        }

        upload.push(Parameter)
        uploadPost()
    }

    // upload post 
    function uploadPost(){
        let postContainer = document.getElementById('container-project')

        postContainer.innerHTML =  ``

    // upload pengulangan
    for(let i = 0; i < upload.length; i++){
        postContainer.innerHTML += `
        <div class="container-post">
            <div class="up">
                <img src="${upload[i].image}" alt="">
            </div>
            <div class="down">
                <h2><a href="project-1.html">${upload[i].projectName}</a></h2>
                <p class="durasi">${getDuration(upload[i].startDateProject, upload[i].endDateProject)}</p>
                <textarea name="" id="" cols="35" rows="4" class="scroll">${upload[i].description}</textarea>
                <div>
                ${upload[i].node?'<img src="img/node.png" style=" width: 9%; margin-left:5px;">':''}
                ${upload[i].next?'<img src="img/next.svg" style=" width: 10%; margin-left:5px;">':''}
                ${upload[i].react?'<img src="img/react.png" style=" width: 10%; margin-left:5px;">':''}
                ${upload[i].type?'<img src="img/typescript.png" style=" width: 11%; margin-left:5px;">':''}
                </div>
                <br>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    </div>`
    }
    }

//   Duration
function getDuration(startDateProject, endDateProject) {
    // Deklarasi jumlah hari, bulan, tahun
        let time = new Date(endDateProject) - new Date(startDateProject)
        let days = time / (24 * 3600 * 1000)
        let months = 30
        let years = months * 12
       
    
    // perhitungan jumlah dari endDate dan startDate
        let dayDistance = Math.floor((days % years) % months) % 7
        let weekDistance = Math.floor(((days % years) % months) / 7)
        let monthDistance = Math.floor((days % years) / months)
        let yearDistance = Math.floor(days / years)
        
    // menampilkan to innerHTML
        let duration = "";
        if ( yearDistance > 0) {
            duration += yearDistance + " tahun ";
            } if (monthDistance > 0) {
                duration += monthDistance + " bulan ";
                    } if (weekDistance > 0) { 
                        duration += weekDistance + " minggu ";
                        } if (dayDistance > 0) {
                            duration += dayDistance + " hari";
                            }
        return duration;
}

