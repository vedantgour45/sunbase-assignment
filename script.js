const formControls = document.getElementById("formControls");
const formPreview = document.getElementById("formPreview");
const saveBtn = document.getElementById("saveBtn");
const renderedForm = document.getElementById("renderedForm");

// Sample JSON data
const formData = [
  {
    id: "c0ac49c5-871e-4c72-a878-251de465e6b4",
    type: "input",
    label: "Sample Label",
    placeholder: "Sample placeholder",
  },
  {
    id: "146e69c2-1630-4a27-9d0b-f09e463a66e4",
    type: "select",
    label: "Sample Label",
    options: ["Sample Option", "Sample Option", "Sample Option"],
  },
  {
    id: "45002ecf-85cf-4852-bc46-529f94a758f5",
    type: "input",
    label: "Sample Label",
    placeholder: "Sample Placeholder",
  },
  {
    id: "680cff8d-c7f9-40be-8767-e3d6ba420952",
    type: "textarea",
    label: "Sample Label",
    placeholder: "Sample Placeholder",
  },
];

// Render initial form
renderForm();

// Function to render form based on JSON data
function renderForm() {
  renderedForm.innerHTML = "";
  const formElements = formData.map((item) => {
    let element;
    if (item.type === "input") {
      element = document.createElement("input");
      element.type = "text";
      element.placeholder = item.placeholder;
    } else if (item.type === "select") {
      element = document.createElement("select");
      item.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.text = option;
        element.add(optionElement);
      });
    } else if (item.type === "textarea") {
      element = document.createElement("textarea");
      element.placeholder = item.placeholder;
    }
    element.id = item.id;

    const container = document.createElement("div"); // Create container div
    const label = document.createElement("label");
    label.textContent = item.label; // item.type

    const parentContainer = document.createElement("div");
    parentContainer.classList.add("parent-container");

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = `
        <span class="button__text">
          <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg">
            <title></title>
            <path style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
            <line y2="112" y1="112" x2="432" x1="80" style="stroke:#323232;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line>
            <path style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
            <line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
            <line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
            <line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
          </svg>
        </span>
      `;
    deleteBtn.addEventListener("click", () => {
      deleteElement(item.id);
    });

    container.appendChild(label); // Append label to container
    container.appendChild(deleteBtn); // Append delete button to container
    parentContainer.appendChild(container);
    parentContainer.appendChild(element);

    return parentContainer;
  });

  renderedForm.append(...formElements);
}

// Function to add form element
function addElement(type) {
  const newItem = {
    id: generateId(),
    type: type,
    label: "Sample Label",
    placeholder: "Sample Placeholder",
    options:
      type === "select"
        ? ["Sample Option 1", "Sample Option 2", "Sample Option 3"]
        : undefined,
  };
  formData.push(newItem);

  // Create the new form element
  const newElement = createFormElement(newItem);

  // Attach drag and drop event listeners to the new element
  attachDragAndDropListeners(newElement);

  // Append the new element to the rendered form
  renderedForm.appendChild(newElement);
}

// Function to create a form element based on JSON data
function createFormElement(item) {
  let element;
  if (item.type === "input") {
    element = document.createElement("input");
    element.type = "text";
    element.placeholder = item.placeholder;
  } else if (item.type === "select") {
    element = document.createElement("select");
    item.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.text = option;
      element.add(optionElement);
    });
  } else if (item.type === "textarea") {
    element = document.createElement("textarea");
    element.placeholder = item.placeholder;
  }
  element.id = item.id;

  const container = document.createElement("div");
  const label = document.createElement("label");
  label.textContent = item.label;

  const parentContainer = document.createElement("div");
  parentContainer.classList.add("parent-container");

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = `
      <span class="button__text">
        <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg">
          <title></title>
          <path style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
          <line y2="112" y1="112" x2="432" x1="80" style="stroke:#323232;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line>
          <path style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
          <line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
          <line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
          <line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
        </svg>
      </span>
    `;
  deleteBtn.addEventListener("click", () => {
    deleteElement(item.id);
  });

  container.appendChild(label);
  container.appendChild(deleteBtn);
  parentContainer.appendChild(container);
  parentContainer.appendChild(element);

  return parentContainer;
}

// Function to attach drag and drop event listeners to an element
function attachDragAndDropListeners(element) {
  element.addEventListener(
    "dragstart",
    function (e) {
      handleDragStart(element, e);
    },
    false
  );
  element.addEventListener(
    "dragenter",
    function () {
      handleDragEnter(element);
    },
    false
  );
  element.addEventListener(
    "dragover",
    function (e) {
      handleDragOver(element, e);
    },
    false
  );
  element.addEventListener(
    "dragleave",
    function () {
      handleDragLeave(element);
    },
    false
  );
  element.addEventListener(
    "drop",
    function (e) {
      handleDrop(element, e);
    },
    false
  );
  element.addEventListener("dragend", handleDragEnd, false);
}

// Function to delete form element
function deleteElement(id) {
  const index = formData.findIndex((item) => item.id === id);
  if (index !== -1) {
    formData.splice(index, 1);
    renderForm();
  }
}

// Function to generate unique ID
function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Event listener for save button
saveBtn.addEventListener("click", () => {
  console.log(JSON.stringify(formData, null, 2));
});

let dragSrcElement = null;

function handleDragStart(element, e) {
  dragSrcElement = element;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", null);

  // Prevent text selection
  if (e.stopPropagation) {
    e.stopPropagation();
  }
  return false;
}

function handleDragOver(element, e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  element.classList.add("drag-over");
  e.dataTransfer.dropEffect = "move";

  return false;
}

function handleDragEnter(element) {
  element.classList.add("drag-over");
}

function handleDragLeave(element) {
  element.classList.remove("drag-over");
}

function handleDrop(element, e) {
  e.preventDefault();
  e.stopPropagation();

  if (dragSrcElement !== element) {
    // Swap the positions of dragSrcElement and element
    const parent = element.parentNode;
    const indexDragSrc = Array.from(parent.children).indexOf(dragSrcElement);
    const indexElement = Array.from(parent.children).indexOf(element);

    if (indexDragSrc < indexElement) {
      parent.insertBefore(dragSrcElement, element.nextSibling);
    } else {
      parent.insertBefore(dragSrcElement, element);
    }

    // Update the formData array to reflect the new order
    const idDragSrc = dragSrcElement.id;
    const idElement = element.id;

    const indexDragSrcFormData = formData.findIndex(
      (item) => item.id === idDragSrc
    );
    const indexElementFormData = formData.findIndex(
      (item) => item.id === idElement
    );

    const temp = formData[indexDragSrcFormData];
    formData[indexDragSrcFormData] = formData[indexElementFormData];
    formData[indexElementFormData] = temp;

    // Log the updated JSON data
    console.log(JSON.stringify(formData, null, 2));
  }

  // Remove drag-over class after drop
  element.classList.remove("drag-over");

  return false;
}

function handleDragEnd() {
  const containers = document.querySelectorAll(".parent-container");
  containers.forEach(function (container) {
    container.classList.remove("drag-over");
  });

  // Log the updated JSON data after the drag operation is complete
  console.log(JSON.stringify(formData, null, 2));
}

const containers = document.querySelectorAll(".parent-container");
containers.forEach(function (container) {
  container.addEventListener(
    "dragstart",
    function (e) {
      handleDragStart(container, e);
    },
    false
  );
  container.addEventListener(
    "dragenter",
    function () {
      handleDragEnter(container);
    },
    false
  );
  container.addEventListener(
    "dragover",
    function (e) {
      handleDragOver(container, e);
    },
    false
  );
  container.addEventListener(
    "dragleave",
    function () {
      handleDragLeave(container);
    },
    false
  );
  container.addEventListener(
    "drop",
    function (e) {
      handleDrop(container, e);
    },
    false
  );
  container.addEventListener("dragend", handleDragEnd, false);
});
