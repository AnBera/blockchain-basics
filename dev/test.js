const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// bitcoin.createNewBlock(2389, 'OFIDFBSDC23B', '8934UTBSVJKF6SF');
// bitcoin.createNewBlock(111, 'OFIDJHBBSDC23B', '8934UTHGCSVJKF6SF');
// bitcoin.createNewBlock(2899, 'OFIMBBHFBSDC23B', '8934UYUGGHYUBSVJKF6SF');
//================
// bitcoin.createNewBlock(892348, 'OFIDFBSDC23B', '8934UTBSVJKF6SF');
// bitcoin.createNewTransaction(100, 'ALEX34754BJRG834', 'JEN3245NJKDFVNH' )
// bitcoin.createNewBlock(12312, '09924JHBJJHJH', 'KJSDBVKCD4589HB');

// bitcoin.createNewTransaction(50, 'ALEX34754BJRG834', 'JEN3245NJKDFVNH' )
// bitcoin.createNewTransaction(300, 'ALEX34754BJRG834', 'JEN3245NJKDFVNH' )
// bitcoin.createNewTransaction(2000, 'ALEX34754BJRG834', 'JEN3245NJKDFVNH' )

// bitcoin.createNewBlock(98734, 'SDJHBSDDFV324G', 'S34T4VHTFBGDF');
// console.log(bitcoin.chain[2]);
//==========
const prevBlHash = 'jadfvhbhvadfvjnag43i7y3458345';
const currentBlData = [
    {
        amount: 10,
        sender: 'ekjvrgjkvfgvd',
        recipient: 'adjkfvkajvagvavdf'
    },
    {
        amount:30,
        sender: 'ekjsdcvrgjkvfgvd',
        recipient: 'adjsdsdckfvkajvagvavdf'
    },
    {
        amount: 200,
        sender: 'ekjscdcdvrgjkvfgvd',
        recipient: 'adcsdsdjkfvkajvagvavdf'
    },
];
// const nonce = 100;

// console.log(bitcoin.hashBlock(prevBlHash, currentBlData, nonce));
console.log(bitcoin.proofOfWork(prevBlHash, currentBlData));
// console.log(bitcoin.hashBlock(prevBlHash, currentBlData, 14298));
//==========

// console.log(bitcoin);