function showResult(title, data) {
    $('#resultArea').html(`${title}\n${JSON.stringify(data, null, 2)}`);
}

function showError(error) {
    $('#resultArea').html('Error: ' + error);
}

function registerDriver() {
    const formData = {};
    $('#createDriverForm').serializeArray().forEach(item => {
        formData[item.name] = item.value;
    });

    $.ajax({
        url: 'http://localhost:8088/drivers',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            showResult('운전자 등록 결과:', response);
            $('#createDriverForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function updateDriver() {
    const driverId = $('#updateDriverId').val();
    const formData = {};
    $('#updateDriverForm').serializeArray().forEach(item => {
        if (item.name !== 'driverId') {
            formData[item.name] = item.value;
        }
    });

    $.ajax({
        url: `http://localhost:8088/drivers/${driverId}`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            showResult('운전자 수정 결과:', response);
            $('#updateDriverForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function deleteDriver() {
    const driverId = $('#deleteDriverId').val();
    
    $.ajax({
        url: `http://localhost:8088/drivers/${driverId}`,
        type: 'DELETE',
        success: function(response) {
            showResult('운전자 삭제 결과:', '운전자가 성공적으로 삭제되었습니다.');
            $('#deleteDriverForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function loadDrivers() {
    $.ajax({
        url: 'http://localhost:8088/drivers',
        type: 'GET',
        success: function(response) {
            showResult('운전자 목록:', response);
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function registerVehicle() {
    const formData = {};
    $('#createVehicleForm').serializeArray().forEach(item => {
        formData[item.name] = item.value;
    });

    $.ajax({
        url: 'http://localhost:8088/vehicles',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            showResult('차량 등록 결과:', response);
            $('#createVehicleForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function updateVehicle() {
    const carrierNo = $('#updateCarrierNo').val();
    const formData = {};
    $('#updateVehicleForm').serializeArray().forEach(item => {
        if (item.name !== 'carrierNo') {
            formData[item.name] = item.value;
        }
    });

    $.ajax({
        url: `http://localhost:8088/vehicles/${carrierNo}`,
        type: 'PATCH',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        success: function(response) {
            showResult('차량 수정 결과:', response);
            $('#updateVehicleForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function deleteVehicle() {
    const carrierNo = $('#deleteCarrierNo').val();
    
    $.ajax({
        url: `http://localhost:8088/vehicles/${carrierNo}`,
        type: 'DELETE',
        success: function(response) {
            showResult('차량 삭제 결과:', '차량이 성공적으로 삭제되었습니다.');
            $('#deleteVehicleForm')[0].reset();
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}

function loadVehicles() {
    $.ajax({
        url: 'http://localhost:8088/vehicles',
        type: 'GET',
        success: function(response) {
            showResult('차량 목록:', response);
        },
        error: function(xhr, status, error) {
            showError(error);
        }
    });
}