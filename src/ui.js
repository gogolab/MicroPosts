class UI {
    constructor() {
        this.titleInput = document.querySelector("#title");
        this.bodyInput = document.querySelector("#body");
        this.posts = document.querySelector("#posts");
        this.idInput = document.querySelector("#id");
        this.postSubmit = document.querySelector(".post-submit");
        this.formState = "add";
    }

    showPosts(posts) {
        let output = "";

        posts.forEach(post => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>
                        <a href="#" class="delete card-link" data-id="${
                            post.id
                        }">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });

        this.posts.innerHTML = output;
    }

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState("edit");
    }

    changeFormState(type) {
        if (type === "edit") {
            this.postSubmit.textContent = "Update Post";
            this.postSubmit.className = "post-submit btn btn-block btn-warning";

            const button = document.createElement("button");
            button.className = "post-cancel btn btn-light btn-block";
            button.appendChild(document.createTextNode("Cancel Edit"));

            const container = document.querySelector(".card-form");
            const formEnd = document.querySelector(".form-end");
            container.insertBefore(button, formEnd);

            this.formState = type;
        } else {
            this.postSubmit.textContent = "Post it";
            this.postSubmit.className = "post-submit btn btn-block btn-primary";

            if (document.querySelector(".post-cancel")) {
                document.querySelector(".post-cancel").remove();
            }

            this.clearIdInput();
            this.clearFields();
        }
    }

    clearIdInput() {
        this.idInput.value = "";
    }

    showAlert(message, className) {
        this.clearAlert();

        const div = document.createElement("div");

        div.className = className;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector(".postsContainer");

        container.insertBefore(div, document.querySelector("#posts"));

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = "";
        this.bodyInput.value = "";
    }
}

export const ui = new UI();
