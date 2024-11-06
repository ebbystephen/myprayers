// script.js

// Fetch fixed prayers
const fixedPrayers = [
    {
        id: "_fixedprayer01", title: "വിശ്വാസപ്രമാണം", icon: "💒", content: `
        <b>വിശ്വാസപ്രമാണം</b>
സര്‍വ്വശക്തനായ പിതാവും ആകാശത്തിന്‍റെയും ഭൂമിയുടെയും സ്രഷ്ടാവുമായ ദൈവത്തില്‍ ഞാന്‍ വിശ്വസിക്കുന്നു. അവിടുത്തെ ഏകപുത്രനും ഞങ്ങളുടെ കര്‍ത്താവുമായ ഈശോമിശിഹായിലും ഞാന്‍ വിശ്വസിക്കുന്നു. ഈ പുത്രന്‍ പരിശുദ്ധാത്മാവാല്‍ ഗര്‍ഭസ്ഥനായി കന്യാമറിയത്തില്‍ നിന്നു പിറന്നു. പന്തിയോസ് പീലാത്തോസിന്‍റെ കാലത്ത് പീഡകള്‍ സഹിച്ച്, കുരിശില്‍ തറയ്ക്കപ്പെട്ട്, മരിച്ച് അടക്കപ്പെട്ടു; പാതാളത്തില്‍ ഇറങ്ങി, മരിച്ചവരുടെ ഇടയില്‍നിന്നു മൂന്നാം നാള്‍ ഉയിര്‍ത്തു; സ്വര്‍ഗ്ഗത്തിലെക്കെഴുന്നള്ളി, സര്‍വ്വശക്തിയുള്ള പിതാവായ ദൈവത്തിന്‍റെ വലതു ഭാഗത്ത് ഇരിക്കുന്നു; അവിടെനിന്ന് ജീവിക്കുന്നവരെയും മരിച്ചവരെയും വിധിക്കാന്‍ വരുമെന്നും ഞാന്‍ വിശ്വസിക്കുന്നു. പരിശുദ്ധാത്മാവിലും ഞാന്‍ വിശ്വസിക്കുന്നു. വിശുദ്ധ കത്തോലിക്കാ സഭയിലും, പുണ്യവാന്മാരുടെ ഐക്യത്തിലും, പാപങ്ങളുടെ മോചനത്തിലും, ശരീരത്തിന്‍റെ ഉയിര്‍പ്പിലും നിത്യമായ ജീവതത്തിലും ഞാന്‍ വിശ്വസിക്കുന്നു. ആമ്മേന്‍.
    ` },
    {
        id: "_fixedprayer02", title: "എത്രയും ദയയുള്ള മാതാവേ", icon: "🌹", content: `
        <b>എത്രയും ദയയുള്ള മാതാവേ</b>
എത്രയും ദയയുള്ള മാതാവേ, അങ്ങയുടെ സങ്കേതത്തില്‍ ഓടിവന്നു, അങ്ങേ സഹായം തേടി, അങ്ങേ മാദ്ധ്യസ്ഥം യാചിച്ചവരില്‍ ഒരുവനെയെങ്കിലും അങ്ങ് ഉപേക്ഷിച്ചതായി കേട്ടിട്ടില്ല എന്ന് ഓര്‍ക്കണമേ. കന്യകളുടെ രാജ്ഞിയായ കന്യകേ, ദയയുള്ള മാതാവേ ഈ വിശ്വാസത്താല്‍ ധൈര്യപെട്ട് അങ്ങേ തൃപ്പാദത്തിങ്കല്‍ ഞാന്‍ അണയുന്നു. വിലപിച്ച്, കണ്ണുനീര്‍ ചിന്തി, പാപിയായ ഞാന്‍ അങ്ങേ ദയാധിക്യത്തെ കാത്തുകൊണ്ട് അങ്ങേ സന്നിധിയില്‍ നില്‍ക്കുന്നു. അവതരിച്ച വചനത്തിന്‍ മാതാവേ എന്റെ അപേക്ഷ ഉപേക്ഷിക്കാതെ ദയാപൂര്‍വം കേട്ടരുളേണമേ. ആമേന്‍
    ` }
];

// Fetch fixed groups
const fixedGroups = [
    { id: "_fixedgroup01", name: "Fixed Group 1" },
    { id: "_fixedgroup02", name: "Fixed Group 2" }
];

// Fetch fixed my prayers
const fixedMyPrayers = [
    { id: generateId(), title: "Fixed My Prayer 1", content: "This is a fixed my prayer.", prayerid: "_fixedprayer01", groupid: "_fixedgroup02", isDaily: true, hasCounter: false },
    { id: generateId(), title: "Fixed My Prayer 2", content: "This is another my prayer.", prayerid: "_fixedprayer02", groupid: "_fixedgroup01", isDaily: false, hasCounter: true }
];

const storageKeyPrayers = 'prayers';
const storageKeyMyPrayers = 'myprayers';
const storageKeyGroups = 'groups';
const groupForm = document.getElementById('groupForm');
const prayerForm = document.getElementById('prayerForm');
const myPrayerForm = document.getElementById('myPrayerForm');

const groupModal = document.getElementById('groupModal');
const prayerModal = document.getElementById('prayerModal');
const myPrayerModal = document.getElementById('myPrayerModal');

const addGroupButton = document.getElementById('addGroupButton');
const closeGroupButton = document.getElementById('closeGroupButton');
const saveGroupButton = document.getElementById('saveGroupButton');
const saveAddNewGroupButton = document.getElementById('saveAddNewGroupButton');
const addPrayerButton = document.getElementById('addPrayerButton');
const closePrayerButton = document.getElementById('closePrayerButton');
const savePrayerButton = document.getElementById('savePrayerButton');
const saveAddNewPrayerButton = document.getElementById('saveAddNewPrayerButton');
const addMyPrayerButton = document.getElementById('addMyPrayerButton');
const closeMyPrayerButton = document.getElementById('closeMyPrayerButton');
const saveMyPrayerButton = document.getElementById('saveMyPrayerButton');
const saveAddNewMyPrayerButton = document.getElementById('saveAddNewMyPrayerButton');

// Function to generate a unique ID
function generateId() {
    return '_' + Math.random().toString(36).substring(2, 11);
}

// Function to HTML encode a string
function htmlEncode(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

// Function to check and store JSON array in localStorage
function checkAndStoreJsonArray(storageKey, jsonArray) {
    if (!localStorage.getItem(storageKey)) {
        localStorage.setItem(storageKey, JSON.stringify(jsonArray));
    }
}


// Function to add a new group
function addGroup(addNew) {
    const id = document.getElementById('groupId').value;
    const name = document.getElementById('groupName').value;
    const groups = JSON.parse(localStorage.getItem(storageKeyGroups)) || [];
    if (id) {
        const index = groups.findIndex(group => group.id ===id);
        groups[index] = { id: id, name: htmlEncode(name) };
        //localStorage.setItem(storageKeyGroups, JSON.stringify(groups));
    }
    else {
        groups.push({ id: generateId(), name: htmlEncode(name) });
    }
    localStorage.setItem(storageKeyGroups, JSON.stringify(groups));
    renderGroups();
    if (!addNew) { 
        closeGroupModal(); 
        } else {
    groupForm.reset();
    document.getElementById('groupId').value = '';
    }
}

function addPrayer(addNew) {
    const id = document.getElementById('prayerId').value;
    const title = document.getElementById('title').value;
    const icon = document.getElementById('icon').value;
    const content = document.getElementById('prayerContent').value;
    const prayers = JSON.parse(localStorage.getItem(storageKeyPrayers)) || [];
    if(id) {
       const index = prayers.findIndex(prayer => prayer.id ===id);
        prayers[index] = { id: id, title: htmlEncode(title), icon: htmlEncode(icon), content: htmlEncode(content) };
        //localStorage.setItem(storageKeyPrayers, JSON.stringify(prayers));
    }
    else {
        prayers.push({ id: generateId(), title: htmlEncode(title), icon: htmlEncode(icon), content: htmlEncode(content) });
    }
    localStorage.setItem(storageKeyPrayers, JSON.stringify(prayers));
    renderPrayers();
    if (!addNew) { 
        closePrayerModal(); 
        } else {
    prayerForm.reset();
    document.getElementById('prayerId').value = '';
    }
}

function addMyPrayer(addNew) {
    const id = document.getElementById('myPrayerId').value;
    const title = document.getElementById('myPrayerTitle').value;
    const content = document.getElementById('myPrayerContent').value;
    const selectedPrayer = document.getElementById('togglePrayerSelect').checked ? document.getElementById('selectPrayer').value: '';
    const selectedGroup = document.getElementById('toggleGroupSelect').checked ? document.getElementById('selectGroup').value : '';
    const isDaily = document.getElementById('isDailyPrayer').checked;
    const hasCounter = document.getElementById('hasCounter').checked;
    const myPrayers = JSON.parse(localStorage.getItem(storageKeyMyPrayers)) || [];
    if(id) {
       const index = myPrayers.findIndex(myPrayer => myPrayer.id ===id);
        myPrayers[index] = { id: id, title: htmlEncode(title), content: htmlEncode(content), selectedPrayer, selectedGroup, isDaily, hasCounter };
    }
    else {
        myPrayers.push({ id: generateId(), title: htmlEncode(title), content: htmlEncode(content), selectedPrayer, selectedGroup, isDaily, hasCounter });
    }
    localStorage.setItem(storageKeyMyPrayers, JSON.stringify(myPrayers));
    renderMyPrayers();
    if (!addNew) { 
        closeMyPrayerModal(); 
        } else {
    myPrayerForm.reset();
    document.getElementById('myPrayerId').value = '';
    }
}

function closeGroupModal() {
    groupModal.style.display = 'none';
    groupForm.reset();
    document.getElementById('groupId').value = '';
}

function closePrayerModal() {
    prayerModal.style.display = 'none';
    prayerForm.reset();
    document.getElementById('prayerId').value = '';
}

function closeMyPrayerModal() {
    myPrayerModal.style.display = 'none';
    myPrayerForm.reset();
    document.getElementById('myPrayerId').value = '';
}

function openGroupModal() {
    groupModal.style.display = 'block';
}

function openPrayerModal() {
    prayerModal.style.display = 'block';
}

function openMyPrayerModal() {
    myPrayerModal.style.display = 'block';
}

function deleteGroup(id) {
    const isConfirmed = confirm("Are you sure you want to delete this group?");
    if (isConfirmed) {
        const groups = JSON.parse(localStorage.getItem(storageKeyGroups)) || [];
        const updatedGroups = groups.filter(group => group.id !== id);
        localStorage.setItem(storageKeyGroups, JSON.stringify(updatedGroups));
        renderGroups();
    }
}

function deletePrayer(id) {
    const isConfirmed = confirm("Are you sure you want to delete this prayer?");
    if (isConfirmed) {
        const prayers = JSON.parse(localStorage.getItem(storageKeyPrayers)) || [];
        const updatedPrayers = prayers.filter(prayer => prayer.id !== id);
        localStorage.setItem(storageKeyPrayers, JSON.stringify(updatedPrayers));
        renderPrayers();
    }
}

function deleteMyPrayer(id) {
    const isConfirmed = confirm("Are you sure you want to delete this prayer?");
    if (isConfirmed) {
        const myPrayers = JSON.parse(localStorage.getItem(storageKeyMyPrayers)) || [];
        const updatedMyPrayers = myPrayers.filter(myPrayer => myPrayer.id !== id);
        localStorage.setItem(storageKeyMyPrayers, JSON.stringify(updatedMyPrayers));
        renderMyPrayers();
    }
}

function editGroup(id) {
    const groups = JSON.parse(localStorage.getItem(storageKeyGroups)) || [];
    const group = groups.find(group => group.id === id);
    document.getElementById('groupId').value = group.id;
    document.getElementById('groupName').value = group.name;
    openGroupModal();
}

function editPrayer(id) {
    const prayers = JSON.parse(localStorage.getItem(storageKeyPrayers)) || [];
    const prayer = prayers.find(prayer => prayer.id === id);
    document.getElementById('prayerId').value = prayer.id;
    document.getElementById('title').value = prayer.title;
    document.getElementById('icon').value = prayer.icon;
    document.getElementById('prayerContent').value = prayer.content;
    openPrayerModal();
}

function editMyPrayer(id) {
    const myPrayers = JSON.parse(localStorage.getItem(storageKeyMyPrayers)) || [];
    const myPrayer = myPrayers.find(myPrayer => myPrayer.id === id);
    document.getElementById('myPrayerId').value = myPrayer.id;
    document.getElementById('myPrayerTitle').value = myPrayer.title;
    document.getElementById('myPrayerContent').value = myPrayer.content;
    document.getElementById('selectPrayer').value = myPrayer.selectedPrayer;
    document.getElementById('selectGroup').value = myPrayer.selectedGroup;
    document.getElementById('isDailyPrayer').checked = myPrayer.isDaily;
    document.getElementById('hasCounter').checked = myPrayer.hasCounter;
    document.getElementById('toggleGroupSelect').checked = myPrayer.selectedGroup ? true : false;
    document.getElementById('togglePrayerSelect').checked = myPrayer.selectedPrayer ? true : false;
    document.getElementById('selectGroup').style.display = myPrayer.selectedGroup ? 'block' : 'none';
    document.getElementById('selectPrayer').style.display = myPrayer.selectedPrayer ? 'block' : 'none';
    document.getElementById('myPrayerTitle').required = myPrayer.selectedPrayer ? false : true;
    document.getElementById('myPrayerContent').disabled = myPrayer.selectedPrayer ? true : false;
    document.getElementById('myPrayerContent').value = myPrayer.selectedPrayer ? '' : myPrayer.content;
    document.getElementById('myPrayerContent').required = myPrayer.selectedPrayer ? false : true;
    openMyPrayerModal();
}

// Function to render my prayers
function renderMyPrayers() {
    const dataTable = document.getElementById('myPrayerList').getElementsByTagName('tbody')[0];
    dataTable.innerHTML = '';

    // Fetch my prayers from localStorage
    const storedMyPrayers = JSON.parse(localStorage.getItem(storageKeyMyPrayers)) || [];

    // Render stored my prayers
    storedMyPrayers.forEach(prayer => {
        const row = dataTable.insertRow();
        row.insertCell(0).innerText = getGroupName(prayer.selectedGroup) || 'None';
        row.insertCell(1).innerText = concatenateStrings(prayer.title, getPrayerName(prayer.selectedPrayer));
        row.insertCell(2).innerText = prayer.isDaily ? 'Yes' : 'No';
        row.insertCell(3).innerText = prayer.hasCounter ? 'Yes' : 'No';
        const actionCell = row.insertCell(4);
        actionCell.innerHTML = `
        <button class="action-btn edit" onclick="editMyPrayer('${prayer.id}')"></button>
        <button class="action-btn delete" onclick="deleteMyPrayer('${prayer.id}')"></button>
        `;
    });
}

function concatenateStrings(stringA, stringB) {
    if (!stringA && !stringB) {
        return '';
    } else if (!stringA) {
        return stringB;
    } else if (!stringB) {
        return stringA;
    } else {
        return `${stringA} (${stringB})`;
    }
}

// Function to render groups
function renderGroups() {
    const dataTable = document.querySelector('#groupList tbody');
    if (!dataTable) {
        console.error('The tbody element for groupList was not found.');
        return;
    }

    dataTable.innerHTML = '';

    // Fetch groups from localStorage
    const storedGroups = JSON.parse(localStorage.getItem(storageKeyGroups)) || [];
    if (storedGroups.length === 0) {
        dataTable.insertAdjacentHTML('beforeend', `
            <tr>
                <td colspan="2" style="text-align: center;">No records found</td>
            </tr>
        `);
    } else {
        // Render stored groups
        storedGroups.forEach(group => {
            const row = dataTable.insertRow();
            row.insertCell(0).innerText = group.name;
            const actionCell = row.insertCell(1);
            actionCell.innerHTML = `
        <button class="action-btn edit" onclick="editGroup('${group.id}')"></button>
        <button class="action-btn delete" onclick="deleteGroup('${group.id}')"></button>
        `;
        });
    }
}



// Function to render prayers
function renderPrayers() {
    
    const dataTable = document.querySelector('#prayerList tbody');
    if (!dataTable) {
        console.error('The tbody element for prayerList was not found.');
        return;
    }

    dataTable.innerHTML = '';

    // Fetch prayers from localStorage
    const storedPrayers = JSON.parse(localStorage.getItem(storageKeyPrayers)) || [];
    if (storedPrayers.length === 0) {
        dataTable.insertAdjacentHTML('beforeend', `
            <tr>
                <td colspan="2" style="text-align: center;">No records found</td>
            </tr>
        `);
    } else {
        // Render stored prayers
        storedPrayers.forEach(prayer => {
            const row = dataTable.insertRow();
            row.insertCell(0).innerText = prayer.icon + ' ' + prayer.title;
            const actionCell = row.insertCell(1);
            actionCell.innerHTML = `
        <button class="action-btn edit" onclick="editPrayer('${prayer.id}')"></button>
        <button class="action-btn delete" onclick="deletePrayer('${prayer.id}')"></button>
        `;
        });
    }
}

// Function to get group name by ID
function getGroupName(groupid) {
    const groups = JSON.parse(localStorage.getItem(storageKeyGroups)) || [];
    const group = groups.find(group => group.id === groupid);
    return group ? group.name : null;
}

// Function to get prayer name by ID
function getPrayerName(prayerid) {
    const prayers = JSON.parse(localStorage.getItem(storageKeyPrayers)) || [];
    const prayer = prayers.find(prayer => prayer.id === prayerid);
    return prayer ? prayer.title : null;
}

document.addEventListener('DOMContentLoaded', function () {
    // Usage
    checkAndStoreJsonArray(storageKeyPrayers, fixedPrayers);
    checkAndStoreJsonArray(storageKeyMyPrayers, fixedMyPrayers);
    checkAndStoreJsonArray(storageKeyGroups, fixedGroups);

    // Modal handling for prayers
    const prayerModal = document.getElementById('prayerModal');
    const prayerSpan = document.querySelectorAll('.close');

    document.getElementById('addPrayerButton').addEventListener('click', function () {
        // Clear the textboxes
        document.getElementById('title').value = '';
        document.getElementById('icon').value = '';
        document.getElementById('prayerContent').value = '';
        prayerModal.style.display = 'block';
    });

    prayerSpan.forEach(span => span.addEventListener('click', function () {
        prayerModal.style.display = 'none';
    }));

    window.addEventListener('click', function (event) {
        if (event.target == prayerModal) {
            prayerModal.style.display = 'none';
        }
    });

    //document.getElementById('prayerForm').addEventListener('submit', function (event) {
    //    event.preventDefault();
    //    const title = document.getElementById('title').value;
    //    const icon = document.getElementById('icon').value;
    //    const content = document.getElementById('prayerContent').value;
    //    addPrayer(title, icon, content);
    //    this.reset();
    //    prayerModal.style.display = 'none';
    //});

    document.getElementById('prayerList').addEventListener('click', function (event) {
        const target = event.target;
        const id = event.target.closest('tr').dataset.id;
        if (event.target.classList.contains('delete-prayer')) {
            deletePrayer(id);
        } else if (event.target.classList.contains('edit-prayer')) {
            const prayer = JSON.parse(localStorage.getItem(storageKeyPrayers)).find(prayer => prayer.id === id);
            document.getElementById('title').value = prayer.title;
            document.getElementById('icon').value = prayer.icon;
            document.getElementById('prayerContent').value = prayer.content;
            prayerModal.style.display = 'block';
        }
    });

    // Modal handling for groups
    const groupModal = document.getElementById('groupModal');
    const groupSpan = document.querySelectorAll('.close');

    //document.getElementById('addGroupButton').addEventListener('click', function () {
    //    // Clear the textboxes
    //    document.getElementById('groupName').value = '';
    //    document.getElementById('groupId').value = ''; // Clear the hidden input for group ID
    //    groupModal.style.display = 'block';
    //});

    groupSpan.forEach(span => span.addEventListener('click', function () {
        groupModal.style.display = 'none';
    }));

    window.addEventListener('click', function (event) {
        if (event.target == groupModal) {
            groupModal.style.display = 'none';
        }
    });

    //document.getElementById('groupForm').addEventListener('submit', function (event) {
    //    event.preventDefault();
    //    const groupName = document.getElementById('groupName').value;
    //    const groupId = document.getElementById('groupId').value; // Get the group ID from the hidden input
    //
    //    if (groupId) {
    //        // Update existing group
    //        editGroup(groupId, groupName);
    //    } else {
    //        // Add new group
    //        addGroup(groupName);
    //    }
    //
    //    this.reset();
    //    groupModal.style.display = 'none';
    //});

    //document.getElementById('groupList').addEventListener('click', function (event) {
    //    const target = event.target;
    //    const id = target.closest('tr').dataset.id;
    //
    //    if (target.classList.contains('delete-group')) {
    //        deleteGroup(id);
    //    } else if (target.classList.contains('edit-group')) {
    //        const group = JSON.parse(localStorage.getItem(storageKeyGroups)).find(group => group.id === id);
    //        document.getElementById('groupName').value = group.name;
    //        document.getElementById('groupId').value = group.id; // Store the group ID in a hidden input
    //        groupModal.style.display = 'block';
    //    }
    //});


    // Modal handling for my prayers
    const myPrayerModal = document.getElementById('myPrayerModal');

    // Function to populate select options
    function populateSelectOptions() {
        const prayers = JSON.parse(localStorage.getItem('prayers')) || [];
        const groups = JSON.parse(localStorage.getItem('groups')) || [];
        const selectPrayer = document.getElementById('selectPrayer');
        const selectGroup = document.getElementById('selectGroup');

        selectPrayer.innerHTML = '';
        selectGroup.innerHTML = '';

        // Append fixed prayers
        //fixedPrayers.forEach(prayer => {
        //    selectPrayer.insertAdjacentHTML('beforeend', `<option value="${prayer.id}">${prayer.title}</option>`);
        //});

        // Append stored prayers
        prayers.forEach(prayer => {
            selectPrayer.insertAdjacentHTML('beforeend', `<option value="${prayer.id}">${prayer.title}</option>`);
        });

        // Append fixed groups
        //fixedGroups.forEach(group => {
        //    selectGroup.insertAdjacentHTML('beforeend', `<option value="${group.id}">${group.name}</option>`);
        //});

        // Append stored groups
        groups.forEach(group => {
            selectGroup.insertAdjacentHTML('beforeend', `<option value="${group.id}">${group.name}</option>`);
        });
    }

    // Show the modal and populate select options when the addMyPrayerButton is clicked
    //document.getElementById('addMyPrayerButton').addEventListener('click', function () {
    //    // Clear the textboxes
    //    document.getElementById('myPrayerTitle').value = '';
    //    document.getElementById('myPrayerContent').value = '';
    //    document.getElementById('selectPrayer').value = '';
    //    document.getElementById('selectGroup').value = '';
    //    document.getElementById('isDailyPrayer').checked = false;
    //    document.getElementById('hasCounter').checked = false;
    //    populateSelectOptions();
    //    myPrayerModal.style.display = 'block';
    //});

    // Hide the modal when the close button is clicked
    document.querySelectorAll('.close').forEach(span => span.addEventListener('click', function () {
        myPrayerModal.style.display = 'none';
    }));

    // Hide the modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target == myPrayerModal) {
            myPrayerModal.style.display = 'none';
        }
    });

    // Function to handle the toggleGroupSelect button
    document.getElementById('toggleGroupSelect').addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('selectGroupRow').style.display = 'block';
        } else {
            document.getElementById('selectGroupRow').style.display = 'none';
            document.getElementById('selectGroup').value = '';
        }
    });

    // Function to handle the togglePrayerSelect button
    document.getElementById('togglePrayerSelect').addEventListener('change', function () {
        if (this.checked) {
            document.getElementById('selectPrayerRow').style.display = 'block';
            document.getElementById('myPrayerTitle').required = false;
            //document.getElementById('myPrayerTitle').value = '';
            document.getElementById('myPrayerContent').disabled = true;
            document.getElementById('myPrayerContent').value = '';
        } else {
            document.getElementById('selectPrayerRow').style.display = 'none';
            document.getElementById('selectPrayer').value = '';
            document.getElementById('myPrayerTitle').required = true;
            document.getElementById('myPrayerContent').disabled = false;
        }
    });

    // Function to handle the toggleCounter button
    document.getElementById('hasCounter').addEventListener('change', function () {
        if (this.checked) {
            // Add your counter logic here
            console.log('Counter enabled');
        } else {
            // Add your counter logic here
            console.log('Counter disabled');
        }
    });

    // Function to handle the selectPrayer change event
    document.getElementById('selectPrayer').addEventListener('change', function () {
        const selectedPrayer = this.value;
        if (selectedPrayer) {
            //document.getElementById('myPrayerTitle').required = false;
            //document.getElementById('myPrayerTitle').value = '';
            //document.getElementById('myPrayerContent').disabled = true;
            //document.getElementById('myPrayerContent').value = '';
        } else {
            //document.getElementById('myPrayerTitle').required = true;
            //document.getElementById('myPrayerContent').disabled = false;
        }
    });

    document.getElementById('myPrayerList').addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-my-prayer')) {
            const id = event.target.closest('tr').dataset.id;
            const myPrayers = JSON.parse(localStorage.getItem('myPrayers')) || [];
            const updatedMyPrayers = myPrayers.filter(prayer => prayer.id !== id);
            localStorage.setItem('myPrayers', JSON.stringify(updatedMyPrayers));
            renderMyPrayers();
        } else if (event.target.classList.contains('edit-my-prayer')) {
            const id = event.target.closest('tr').dataset.id;
            const myPrayer = JSON.parse(localStorage.getItem('myPrayers')).find(prayer => prayer.id === id);
            document.getElementById('myPrayerTitle').value = myPrayer.title;
            document.getElementById('myPrayerContent').value = myPrayer.content;
            document.getElementById('selectPrayer').value = myPrayer.selectedPrayer;
            document.getElementById('selectGroup').value = myPrayer.selectedGroup;
            document.getElementById('isDailyPrayer').checked = myPrayer.isDaily;
            const myPrayers = JSON.parse(localStorage.getItem('myPrayers')) || [];
            const updatedMyPrayers = myPrayers.filter(prayer => prayer.id !== id);
            localStorage.setItem('myPrayers', JSON.stringify(updatedMyPrayers));
            myPrayerModal.style.display = 'block';
        }
    });

    // Example: Handling the toggle state change
    document.querySelectorAll('.toggle-button').forEach(button => button.addEventListener('change', function () {
        if (this.checked) {
            console.log(this.id + ' is checked');
        } else {
            console.log(this.id + ' is unchecked');
        }
    }));

    document.querySelectorAll('input[type="text"], textarea').forEach(function (element) {
        element.setAttribute('autocomplete', 'off');
    });

    addGroupButton.addEventListener('click', openGroupModal);
    //closeGroupButton.addEventListener('click', closeGroupModal);
    saveGroupButton.addEventListener('click', () => addGroup(false));
    saveAddNewGroupButton.addEventListener('click',() =>  addGroup(true));

    addPrayerButton.addEventListener('click', openPrayerModal);
    //closePrayerButton.addEventListener('click', closePrayerModal);
    savePrayerButton.addEventListener('click', () => addPrayer(false));
    saveAddNewPrayerButton.addEventListener('click',() =>  addPrayer(true));

    addMyPrayerButton.addEventListener('click', openMyPrayerModal);
    //closeMyPrayerButton.addEventListener('click', closeMyPrayerModal);
    saveMyPrayerButton.addEventListener('click', () => addMyPrayer(false));
    saveAddNewMyPrayerButton.addEventListener('click',() =>  addMyPrayer(true));

     renderGroups();
     renderPrayers();
     renderMyPrayers();
     populateSelectOptions();
});

$(document).ready(function() {
    $("#tabs").tabs();
    $("#adminTabs").tabs();

    // Usage
    checkAndStoreJsonArray(storageKeyPrayers, fixedPrayers);
    checkAndStoreJsonArray(storageKeyMyPrayers, fixedMyPrayers);
    checkAndStoreJsonArray(storageKeyGroups, fixedGroups);

    renderPrayers();
    renderGroups();
    renderMyPrayers();
});