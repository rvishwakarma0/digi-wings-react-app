class APIService {
    getNearByNgo(volId, maxDistance) {
        return fetch("http://localhost:8080/v1/get-nearby-ngo?" + new URLSearchParams({
            vId: volId,
            maxDistance: maxDistance,
        }), {
            method: "GET",
            headers: new Headers({'content-type': 'application/json'}),
            // body: JSON.stringify({
            // registrationNumber: inputData.regno,
            // name: inputData.name,
            // email: inputData.email,
            // mobile: inputData.contact ,
            // address: inputData.addr,
            // password: inputData.password
            // })
            
        });
    }

}

export default APIService;