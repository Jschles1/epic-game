const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');

    const gameContract = await gameContractFactory.deploy(
        ['Captain America', 'Iron Man', 'Thor'], // Names
        [
            'https://i.imgur.com/seJyGXO.jpg', // Images
            'https://i.imgur.com/YWbDfdO.jpg',
            'https://i.imgur.com/akFMc0S.jpg',
        ],
        [150, 200, 250], // HP values
        [25, 35, 30], // Attack damage values
        'Thanos', // Boss name
        'https://i.imgur.com/gurONsg.jpg', // Boss image
        10000, // Boss hp
        50, // Boss attack damage
    );

    await gameContract.deployed();
    console.log('Contract deployed to:', gameContract.address);

    console.log('Done!');
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
