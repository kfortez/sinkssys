// Employee data object
const employees = {
    'Ivan Petrov': {
        jobTitle: 'Software Engineer',
        department: 'IT',
        email: 'ivan.petrov@sinksrus.com',
        contact: '555-6789',
        address: '12 Red Square, Moscow',
        sex: 'Male',
        maritalStatus: 'Single'
    },
    'Pedro Los Baños': {
        jobTitle: 'Marketing Manager',
        department: 'Marketing',
        email: 'pedro_los_banos@sinksrus.com',
        contact: '',
        address: '123 Mabini St',
        sex: 'Male',
        maritalStatus: 'Married'
    },
    'Ana Gómez': {
        jobTitle: 'HR Specialist',
        department: 'HR',
        email: 'ana.gomez@sinksrus.com',
        contact: '555-1526',
        address: '',
        sex: 'Female',
        maritalStatus: 'Divorced'
    },
    'John Wu': {
        jobTitle: 'Sales Associate',
        department: 'Sales',
        email: 'john.wu@sinksrus.com',
        contact: '555-6925',
        address: '456 Rizal St',
        sex: 'Male',
        maritalStatus: 'Single'
    },
    'Emma Wilson': {
        jobTitle: 'CEO',
        department: 'Admin',
        email: 'emma@sinksrus.com',
        contact: '555-1111',
        address: '',
        sex: 'Female',
        maritalStatus: 'Married'
    }
};

// Function to show the modal
function showModal(name) {
    const employee = employees[name];
    
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalJobTitle').textContent = employee.jobTitle;
    document.getElementById('modalDepartment').textContent = employee.department;
    document.getElementById('modalEmail').textContent = employee.email;
    document.getElementById('modalContact').textContent = employee.contact || 'N/A';
    document.getElementById('modalAddress').textContent = employee.address || 'N/A';
    document.getElementById('modalSex').textContent = employee.sex;
    document.getElementById('modalMaritalStatus').textContent = employee.maritalStatus;

    document.getElementById('employeeModal').classList.remove('hidden');
}

// Function to close the modal
function closeModal() {
    document.getElementById('employeeModal').classList.add('hidden');
}
