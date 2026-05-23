const {test, expect} = require('@playwright/test');

var userID;
test.skip('POST Request', async ({request}) => {
    const response = await request.post('/api/v1/create', {
        data: {
            name: 'John Doe',
            salary: 50000,
            age: 30
        }
    });

    console.log(await response.json());
    var res = await response.json();
    userID = res.data?.id;
    expect(response.status()).toBe(200);
    console.log("ID *********",userID);

});
test.skip("GET Request", async ({request}) => {
    const response = await request.get(`/api/v1/employee/${userID}`);
    console.log(await response.json());
    expect(response.status()).toBe(200);
})
test.skip("PUT Request", async ({request}) => {
    const response = await request.put(`/api/v1/update/${userID}`, {
        data: {
            name: 'John Doe Updated',
            salary: 60000,
            age: 31     
        }
    });
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

test("DELETE Request", async ({request}) => {
    const response = await request.delete(`/api/v1/delete/${userID}`);
    console.log(await response.json());
    expect(response.status()).toBe(200);
});

