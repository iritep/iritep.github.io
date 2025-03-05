'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b65dad39b9d610f7bf8c4422ab07346f",
".git/config": "2a71e8c5afb525aa4efe15125be1cd7d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9cf29030a97beda139f6b6851dceb8b3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "898eb35b430db6a5e2c990ace0e7684f",
".git/logs/refs/heads/main": "89df4fc33d41483d6b073e48e519acd4",
".git/logs/refs/remotes/origin/main": "9a743e3f6f8a3f771ef5c3f638cfcf7c",
".git/objects/01/1bd56f72628d8cdeceea6d50b6efbcc5404f77": "3959d394e4b7d680cafa546ceffb0965",
".git/objects/01/2b19b341ce7ac81594050a34b497bc3a2ff0cf": "fafac45da52b141b8061c8397f7775ed",
".git/objects/01/3753bbb3bd18494509b59cb23cf385e9a98e37": "1c6dfc753d6508633cfb88a36995db0e",
".git/objects/01/a045012675d6026895c7804af478f7780b55c5": "ad99adfa8daa339e64d0bc92cd81a325",
".git/objects/01/ae9f10feac7fc0c920a38443aea77f1eba2ed2": "8f3e19ab4c00ef26407051ca62b5fe29",
".git/objects/04/1e5469d0409035b5a93fab34762fb1ccfb8047": "f2a1a8485311d297000345d39e5ac953",
".git/objects/05/f01b00fcace8987240f79f1b998870917d7dee": "c718ef618b6ff1e813e0375b8b777c92",
".git/objects/06/652879c946012c27ef6046a81749b8a2c3adca": "2b0d322d780ac0c163b7790333a7a6e9",
".git/objects/08/4936f758ce0c86b02c5bf5b3754700293e5205": "9e0a667f565f3c1b3b88684bc8726a60",
".git/objects/0a/ba1dadfcb50acb1413a06db10ff5b07c7fcdaa": "dbb905a10d649bd7db6e72cdf37d0b84",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/5c5bd30c9bf1e7b916b0091bbaa594a9e46d62": "b2c7ee0f9515fd4c27aac40c0e3104ce",
".git/objects/11/3be64ebb17a5b9fcd63d42b445cb17d3835569": "41fa7273b9459493281b92eadeea77d4",
".git/objects/12/4a35b3398f15a0cf18b22ce8619a298238533a": "5ac03f76c3599659fb3b814f9612d917",
".git/objects/14/272a7ea1f5e298443f33ebc1cce1d7c0476a54": "3633005ce90c6fe05f3b28e7fc17acb5",
".git/objects/15/b6b6ec00557ea7611ef4d990c4b7a672348607": "40c9e8ff6b8c1fb3efed7638f92d7eb2",
".git/objects/17/035e420bc0f97825b98074064cb904e6c6dcf8": "1729a7471275621612be1bf0c48403cf",
".git/objects/17/4c3072c5689540fbf6b3ad12cb54fb51567762": "a3245fc000759ea527592b9317898ad0",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/9e90a4c0249f971b86133f576a5a7216d3622f": "ddbd6e770930f3809e91da09ce8f9e52",
".git/objects/1b/3ad70f058909cf2770248f75ad45cb0b2b2e42": "3c6314e0a3e928ffe48732a9f9bc7fbf",
".git/objects/1c/0a3d4f8baba54d384806156362b277597f5030": "3acb5a8a8857caebdf6143a2a46c2d59",
".git/objects/1c/25323cd285e82560f170e83da9916ea3e2b911": "98e83ae1126b80e0bfef6365526363eb",
".git/objects/1d/90d2cbfdda268d92e78774b437aedbc828ccc1": "be9c4a1a757cbcbd858bc9f20cc7fcd8",
".git/objects/1e/c9236d18bbcab64799f2221a0a111a7b450fd1": "44333dc8183a285a1d8ec5b2858ad0d0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3f765285c7a9d0d160f1a98d38c4161b79edd6": "a4357a8572a88774781c4f76e3758edb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/c7fa3b02b89221974d63aadee9e95f7cb27f49": "ed43202fece7519283e3419a2a5fc2d3",
".git/objects/23/304b4521e21e3be2b5e5f2642d70381c4e13dd": "2b369f0cd875ea7b1602bc30b18c365e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/9e1597de054fc10f76028b14a3d826f083e79f": "41c081d966526436af8f19c1832928c4",
".git/objects/25/b360a07b9ccf55ed67b53289f1fe253811192e": "e4966a1d2e4eeb3be69a6909527aa217",
".git/objects/27/117e2744cc7b9d8b5d0534850727edf78039dc": "74f48fe45dd5a5bdec94931f7417c4e1",
".git/objects/27/687c9e701b6dd3d1068b4c7ff128f50758a834": "fe0bbb1495e5448ebb3961213d9dbd7e",
".git/objects/27/cfbebf697798730f645d70528d6d0132d400c3": "0e6945a863cc5e9bdbcd1bbd4aecae3a",
".git/objects/27/d309eda2b97486bc8f0be987e0a89350603651": "259fed37c23c325ee3f6b80e44474d9a",
".git/objects/29/ded5ae416a49ba990046be084c843d6dd25987": "3f106a74d87277e0190bd92072ed59df",
".git/objects/2a/7572d6d642c7776c0651befb1b26a3d63b024f": "e8af925254c46d56302e997736503a61",
".git/objects/2a/b324e6a2a4a38bc9f42530188fbf0ea522019b": "59c827f81dddcf755021aa0808ad0f92",
".git/objects/2b/9a5fb3d36cfdc32191a80bb647753e40eb26de": "b652c4bed4d46c58ccd3f6cbe99efcb0",
".git/objects/2c/0bbc97100a24a46f6e932b7d1fcd839d12cd9a": "d26978ac4b7cd41227bfcf3e3d6ae80a",
".git/objects/2c/1e52cfdfa09abe61736db47c737ecbef2965cd": "d08ea883879a4aabff8786e58ed7857a",
".git/objects/2c/8817acaa6901e6e7ffe0931de83116f3311762": "abea25ae0a1e5448e27f025eb00fe5de",
".git/objects/2c/d46bff5c4f5692c8ac1b9310a0a11b87ff7fe0": "594c9759a8f0ade3a5e15f990103f9dd",
".git/objects/2d/acaa19eaaa8ce98a81828e33fa1ecb8a4b7d10": "6e874bfb3959f6dd2c5e9c31d1b2bf43",
".git/objects/2f/7e0de64a39c09136c4110940f022b95dc6e470": "9af9e602d40354925112601dcfabe086",
".git/objects/2f/bdb5fffa04379ae019ad6fe2d06db238042fa8": "588379737ed58c951706defe1c8d2da0",
".git/objects/33/6f966edc931685551cfcb7d26a957b6694215c": "b65f2a2432c2d78c664735ddc5d79c96",
".git/objects/35/1b8f09f14f71fbafb75fabc765b2b8cebc8662": "866b2bfa4a8dffda866f3e7b98d6bf49",
".git/objects/37/a96851a5aa59510b617acafe44a96aeb0285e9": "bd59cc66356a165470f1e281db2daeae",
".git/objects/39/5165cdc45d129ae5c795dcc6d8d06cd3fd0306": "cc025393b2b37892e2152e1d0da56acf",
".git/objects/39/7b3804224b2dbbf074a009632c279e7d246e0d": "191f5c61d33c165b67310fca0511f056",
".git/objects/3a/0d46f98161696be55f8fb7604580c1faa358b1": "f534543e1ea9017da284b9191269bf49",
".git/objects/3a/0e2966efc72f168919f1a8350b33503d560af3": "f8c3e42b87f6d7d1977a1daacf260eff",
".git/objects/3d/7e485973ca392b29ade8adb8e051fa2f4a9bbc": "c58264cc3a5f483cb13fb1ffd35065f3",
".git/objects/3e/be8606731603861e1b7f822901e25190711f22": "8e3fb28724e6d23e1e5174bf9f57483b",
".git/objects/40/c135725e6cfe00e50d5643b71892ad86b8d39d": "252e9d3fd69d48fd28cc4030baeb4a57",
".git/objects/42/fb294bb27f3f408dec963a8fdff0415523b3ab": "c67df7c1caa8e2c5bf6e5cfb8333a22c",
".git/objects/45/445368cd9dc5bf102ebdc12173f0b051206a77": "59c4dc528d6f24584efad6da4302e8b0",
".git/objects/45/75c9bcc84a7af7038369440b76208e4866faa3": "91864dc964b57b6c616537aed7629a6d",
".git/objects/45/ad004a2634f0c19631804e752d013aff1d11f3": "0b887f8d6ae8bfcb197c88334a773961",
".git/objects/45/bd6912b42373586262e83ee801a4b491813d65": "eae9fe2fe0f426d3345737d16c3229d7",
".git/objects/45/fd7404e74a0262831b5bbb7c8578b293478ac8": "3854faed3ee1d10f7e4707295d102f80",
".git/objects/48/d66f51774afe7c068e58e99e119c9fb93076cc": "b9e43c6d9933cbc5bc8e1344a1dc7040",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/781b5a5c03b12d94566ab0e69c8facf4791272": "4f200c432103c2a90a3bf44df6b03bea",
".git/objects/4d/a372a17101b04dd28f92d84ee7a96eb55a0434": "25d4cbc7b5c656ad1c3e20d139be3c25",
".git/objects/4d/ebab24fe7f9f6e4c233ae9eb282fafda143287": "b12fea0f82edcf8e456cf13e3aa320ea",
".git/objects/4e/bb5bde68dff7d593253960a6543b72feb808cc": "6daf73afb429ff5274f10893a8ac32e2",
".git/objects/4f/63f2a1728c88464d31ad67915a7bee1fdf36a0": "742bf9718776e14243f7410a6fb053b9",
".git/objects/50/cb3439709703970eb04775a4e86e23dfde6be6": "10fd4c770b663e5ebe5a14a9ff094886",
".git/objects/54/0c6221a621710b8b77891ee5c4a3a99e91eaaa": "db796bc05da01d819f2e12c418a8b977",
".git/objects/54/2435728656f7e01344e2424aea94dbc6290403": "9e455941133b02c4b16358dd932bd488",
".git/objects/54/88397d37fed05af61388d9a99836c9cae643e5": "c23ff2d17dd5bee5027b54b5ef866ee0",
".git/objects/54/b853ba8844aae368c1668aa03d4439f8214939": "b35b1a0d44cc39ed80aac690c14ca48e",
".git/objects/55/5f009bc5b48de8c606292645e4c3cdedd55c5f": "e1fd505d8b04dfdd00bf1422035ded56",
".git/objects/57/772a48eb5e1349bbffcdbdcc96360b752ac8c6": "e74ee69401e6ece7b46309b0f94b5f08",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5e/4851f0ab7e0268da6ce903306e2f871ee19821": "175e3d630946dfb12bef53afeb623eb0",
".git/objects/60/bc0921bb68cbb5534ec2c75cb4a38f407b163b": "726a97bfb8db3491d1d7fe7d4eb39a59",
".git/objects/60/c10f3da7ea7af87e196fc014f018ac133f3ef1": "7010f3bd7f6c8d51d307435cf6bc55f6",
".git/objects/61/19971c04a3a0e0c304e6d8a01266765ee29b0f": "8db1991557e86aed9dc973eb08d4dcc8",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/e4439ff5b3d152871a679896a03d75d361f46e": "c70d842cd680d6e666700e67f1e23898",
".git/objects/63/f74a4824cb900670eb9fc45609a6a0085eff12": "321b28e2649590c7f4ca5515a30b7267",
".git/objects/65/42c4ba518c2e0412ccf945881709d4c8cf938a": "43ecf7627ccbd6f89df66ab984d18c44",
".git/objects/67/bb4a7e4457714ccf7b60f5e51c789f03465712": "eeca56d599723eb74b7abed4cee23598",
".git/objects/69/2f58cfe3553691bae5a687f2e4753582a48acf": "7254356e032338b7bacb35588424ea56",
".git/objects/69/858452156cdeeef34d2b73312793ca9a35bb24": "764949ac5b478f99b73caf59670ba390",
".git/objects/6a/321fbaa7344cee8ba0d5faa9dc00fb6617ed24": "599f3ad9851aecbb4a1830ed31deda1e",
".git/objects/6c/e1a180433bee7517f5ac543d5128f933167a6d": "04c1fe1407ce3611c254d6c858204899",
".git/objects/6d/35c7bcc72ec5a4dcaf430883ba8b0301ebd6da": "3fc722f01f2466b2f3253dd6259a1ad8",
".git/objects/6d/7208c587b62541112ab41cf46459b58249822b": "dc166b8d6ae8034726302c916b7a773e",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/486ffb3fef721118bb50900cedd134ca206bef": "49a0551848e0deca179cddb8361d2ddf",
".git/objects/72/b9504cdeb5a927abeee0ce87a1233590c15b8f": "da11f7ce60fdbbd5d0d94b98e7997fbe",
".git/objects/79/4c08dcf8cbc92697d3a158b4df56192dcecc39": "a18555b56e3adbc60ddebabd3f130cd6",
".git/objects/7a/fa80e6b46e8b46f296541c53245da31d94217a": "33248b3546fbc39f7fa52ff61ce290a3",
".git/objects/7d/2a79aee5827ce5e029eb33a2179e27df640509": "1ec602c4858c8f445c29bcfaa7c10c8f",
".git/objects/7e/729d5abe02d14c2e8ed50d91bc49ae61d92961": "8edda30d4cdadcd57df1fc079d93d7b9",
".git/objects/7f/0291ead9ef40b600081cc0330663b3e209978f": "d9f7ecf2835799e4bf0bf3af481e273e",
".git/objects/7f/b72b119d86ae9d511b75ebd30c5c659e8378d8": "356abb4d9b931bd0b92b43ba0aed4236",
".git/objects/80/0dc8d410b91a755561ca68e45be50641bbabca": "23aa1549166aa7e29e89fb0c4b629e2f",
".git/objects/81/1373a01afd93506bdee971b1eebfed2afc4d05": "aa98bbbc3e2c1a4a6c0ee334a21d0fa7",
".git/objects/81/f0b29f57d4c35d8882692f3533b1118712ea0d": "9a59c8a7101db39829067b43e5f0206a",
".git/objects/83/fb5b28fe44c7b2dafe0d113d5154e847fe3fcc": "fa0e569be4f3d07e601f7030314ba273",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/29369d3ed976b541cbfe7b7da161145d36a78c": "e45939aa679fb5919bb3a37ca7696a81",
".git/objects/8a/43a9f4e94201ef336bc82e88409013b4ac6262": "93f745f0aa44be3176680282560aa590",
".git/objects/8b/228572eee6c7d4dd39bb7bd0f3aac738b1e13f": "08e35552375f91c657701989182ac28f",
".git/objects/8e/198b1571261b2ca4115d53f6c888fcca222596": "c915778ed7c3107ec8edd394026609b9",
".git/objects/8e/a414b733b70c5d6846facbf35aa7a22ca3db45": "5f9c6e5c7754a2cdb9f85d6bec2e8600",
".git/objects/8e/b0d7e2ba8f1cda0ec4aea6ed951ebef3a9681f": "85e25b5cbeff703a0eed4c4ac8ead01e",
".git/objects/8f/5b525401f72555e8bf90cec72eff58ff1d77d0": "4c91e03489ac693d90718f1c33474636",
".git/objects/8f/efcda9972b691623bcdde04f6e441d05bccae1": "eecda9d9956ddcbf410a8755506ea264",
".git/objects/91/b09f7547aad13a93172bd23666b2f6e51c928a": "925a9bacdabdd242aa62bc152b76db67",
".git/objects/91/b44e4e43ad242bdffd6d947d262af88f5f0c97": "051a8c86fc7ad00268b5189c5deff418",
".git/objects/94/575bc6a1f6d41e1c9e1773345cbb4ada937c74": "9ce592720b8d31b849b71e3febe47da9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/b5c0763ccc5f43fa53f1fb176dc6323bcfe3d2": "ed9fa4ad5c9655e7b94ea9d336eb3c6a",
".git/objects/97/1260ab9c48165d19348554ff08b49c6856e41c": "d37fff382584d548b4ccb9782c1ae1e2",
".git/objects/98/711a196dc8036f1544fd1d77a94580c92796c7": "1d2d7f873565b9e156d8921dfe70137d",
".git/objects/98/c214a5ae41ea7990564cea8ff609cc4b944ef4": "0306898f0ab37771b3e690fce6b53cbd",
".git/objects/98/c93594e2c96527720b87171ab6ee40ece745df": "463d022037046167fa66b512544cdf47",
".git/objects/9c/36169ad6d6bf106a89e8b02af7c263b4fc5592": "1b4bbb228b3b0241b0012619aad85b59",
".git/objects/9d/87fc5bd161f99505fe4926a85c4ca7c3686fcc": "963b464729bb3bca52b232ae20b10e81",
".git/objects/9e/aefd5e638c4d36965620b3fa4dc71c1ca1ea82": "c5178ed1b12fbbb880bc2ed863255908",
".git/objects/9f/edfc568ce4392f4afb93b52d931b907ce3256b": "c001307c7dfa5f7a5cdff263eeef1ef6",
".git/objects/a0/1f3777a6fc284b7a720c0f8248a27066389ef9": "1ef5c3c4a04465246d17da73a0924833",
".git/objects/a0/44d7505a75b6238934950597393a30af476991": "a24c041e6536754ae46d664cee558179",
".git/objects/a4/2efcc13aa3fa60ab57b0a75db523300858a4f2": "93a99293d5e14245028500f54dc79c04",
".git/objects/a8/d0d4bb992b114f2f8ba2a9d4033ab5d5e09ed4": "2e1074ac6e5c41c908cdbe51cd27f861",
".git/objects/a8/e7e7d96c2cf07f8e4833432b7c0a4d8ac17d1c": "ba07b1db78850eef4d95aff9eb1e39c6",
".git/objects/aa/7fd91a56d86dfe949cba8648c244da0a14b8b0": "fe2db96c9eb0105f7690d7b157d938c3",
".git/objects/aa/b49831c8f03f7fd2c7c49e13b4c81c5ba76dd4": "c55c2d7b49eb5a5c6f8df92ed99f787c",
".git/objects/ab/d54bc7d955ad05d46c2bb653cd90a662bc6114": "2e75188b1674807073fa9a40f584f6fe",
".git/objects/ac/1586d7c36d55666f6715d5568e3315eed4b999": "e693b2bbf5ce99e8e18d887a067fe990",
".git/objects/ac/5ea86a53e08b3b91d70de8f2ac1427085b70af": "f699531de8a9dbe44f467113f1d23b1d",
".git/objects/ad/92aff8ccf1e1805ee903025888c8723598c5f1": "e90917283a2223e20aa42f119047f6e0",
".git/objects/b1/d7b050b38b9d5480efe3addc7db77163725b56": "c4ccacdab36631e7b84c4870bb48855c",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/b6acefbfc36d825496555133913704b7cecbfd": "20384e563b24828b51a5c74d6014d219",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/98b70606b6f84b43365ae192f399a258c91667": "97687859d59ead55d372b5efb61d58cc",
".git/objects/bd/6e89188ff8ff335955ffe432ebfa149d80e997": "27995e4f6bcf6b3bf4ffcf4e68f28d13",
".git/objects/bf/bee4aa49921d6b5b01aedd91d6f76711a6a3d4": "abfd816bb7a8396f1b847da71e953f75",
".git/objects/c0/1375d59fff60d20ff14db00697a500e0d5d558": "162b0d392f117a2d02ab5beb21ca8f55",
".git/objects/c0/47b0622ec9456dec7b5c0c21cc26820fab1069": "a42b508923834041bf646e4205ddc67d",
".git/objects/c2/bcd0bb093459f9904b2421fdd765d685662f90": "4e18b52bcb952c4e62a609652b2e8805",
".git/objects/c4/d4c33b2de8f42a049eb1c086f586eda0b2bd17": "67d35871e6b2d04cb9d465625aec6f21",
".git/objects/c5/53ae8b162cb83c7851f6940995230d80cab54f": "0b26684e7126f8ef4d8e55a18b640f57",
".git/objects/c6/c3d1767c3012092508c32462281cb40d0b6351": "9d5b67606e3163a5d8d467b76cc9e64e",
".git/objects/c8/bbe388adb6c10b6627cb12905ac5e63dc80a5e": "bbd63a09bb47a94396e9471d03d49928",
".git/objects/c8/cdcb1aa7e80b05e3015f2382ae8a59d89addb4": "ce11cac01d8175172a689006ab7fee76",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/3cdaf0253dcfc4a794f83b1dd30d7e6884e092": "a3aa882d6368b1f47c92a278a43720d5",
".git/objects/cb/db8a8e325e9edee4087d3862c61837b28744b8": "c196069e4aed91ddd19412b2aeadd5ea",
".git/objects/cd/c4afae52a65391588ae1162a73b86f8b592b7f": "3fdeb8baa14bb82c78c357f59a5df515",
".git/objects/cd/ca4ddf58c8258252ef6e4829a162bd287581ab": "52747d94685036668274f61b13ab4781",
".git/objects/ce/ad8e654cc87049dd9785d54a8df0e951ad0389": "0e14f48cae5aea5f4bdc68858b05c75d",
".git/objects/cf/60014e80a0f87ba37e20d078aa0be9da4077d8": "8dd030af12b2f727d25f97e45e8cfcb4",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/4c2aa0dc7794d24a5ccaa1f095c78631662ab8": "b7613f2e55edd245ee44ea7f45706aec",
".git/objects/d2/b7744e8191be1d55f318b189b2b52f4407009c": "50795f684e330a6044978131a19b6e60",
".git/objects/d3/9f0612bcb3faa3df3fb44ab5fbba14cc4a490c": "39a70e02687d580157e24c33ad14494a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/e61d55584a822ef7f1dc365314953a9aae6cfb": "dd3329b9ede2de6f6161e84d460a98ea",
".git/objects/e4/026d58d1f997749fc1af6637d3ddcb77dafabf": "a4a8ff95923de3c7aaf40eb94172dc41",
".git/objects/e4/086272116dcb436a07ac22acf620567da60bcc": "44885b434910748dd2130e3661937ebf",
".git/objects/e4/765351080b85a56ca5fb9948b98e24390f075d": "1480b5b501b68eba90e83ff9f889090a",
".git/objects/e4/ac78c144df788338a8d7b058d33b5e79498f1c": "ea91fcb6a4467b9f2a2b9b1b98c2b309",
".git/objects/e6/01f2192d4f8eb483c12abd1854f56110050535": "70167d4e10297b133ce42b5ec63a7caf",
".git/objects/e9/27aaf1fa169dfd182ad835471cbb4e1594345c": "f99f253ad6478424896b6171b1663304",
".git/objects/e9/356154653031481bc194bdd8ca4b7f12dea0e8": "480de92ec35ec000152671ea7c5757a3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/0c71ff73a6a71433211bd25d8124c076a3b329": "739a05cef56917b0672ad690420b888a",
".git/objects/ec/7f68043faafe033f9d0809e3a91a1d3194db0b": "fb70be0506b5be7cafa32ba1ada03133",
".git/objects/ec/c7041e23ed1a61574efe48e8bc42441a401d6e": "aac2d0844d4ef275550a63d0347a8a86",
".git/objects/f0/49df469798df78a8f6e8766b6acb8af82c8b8b": "26a135a93e7882fb96cd41769eddb9a8",
".git/objects/f0/b58cbfce64d866ba7361b393d95731c3ddc7f6": "f8f0ed841dcfaf80687e8c2aad1d29b3",
".git/objects/f1/ebd5b98c475a8186d93e826acdc4f60b0c2119": "7ffeeb1621de99b35eac5e4570b850af",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/a2ce2ac43a209e0896f3212eff7045b856d06d": "2d74a4dc3551b3dc7bede66c23322b66",
".git/objects/f3/61fc1d52657a58888ee164b83dc63b5e15561c": "bcec9bc84a0f350cbb45e9522eeadedd",
".git/objects/f4/1e6d035ffa4330eaefaf2e88c0cf13b5d076f3": "d556a7331cdf2f7eba729e12491f6231",
".git/objects/f4/72b854072988c68fbbdf330e7b00c43299f660": "de74c411346cf6f4cf2afaa94bc8aca2",
".git/objects/f4/85df712ea5da531ebd9f06cfd56fa6e34b9692": "f6e4af31d1201ab65508f3ce3dea8931",
".git/objects/f5/d6f569e930bb8ded29c43e11085576e744d242": "fd88c3b03adf02fa2a7b08eb10f4e6b3",
".git/objects/f6/19aaa78d15466e01f591348e90c57dc8626e07": "afdc9d83f78b35d7c39e494c9b866c51",
".git/objects/f7/b0de53d14da6c2139a3b3a0d5b9d5ac1d71c69": "c04866d8662bb2833ca77ebf571919ef",
".git/objects/f8/fd9347b4ebe49ebf0e0b3b72c588df16d7aa3e": "e614fe6166a7a30835aa822a17fada08",
".git/objects/fc/9131a697ee0d166ef4a54241f477839f1b735d": "0dbdac72d8f90fd463a7bc09fb41bda5",
".git/objects/fd/4df1a3099cf0a99b687f40d0b75633db683078": "13a15fd11ba6157b2b6a6654cad91ed3",
".git/objects/fd/8ee045ae38b938593acb2a223a20eefae351e5": "e61879a18ba107d51fd7ef00c3446bf1",
".git/objects/fd/9857ac8b91728d013617f4216060d2b5f9d1f2": "5a666466bec00778beaf7d3457fd24b2",
".git/objects/fe/041820af4367948af80bfcc06302bc7ce98182": "16d0afa42b43606d10529fae610dc5ab",
".git/objects/fe/23eeb9c93a377d0f4ab003f1f77b555d19b1d1": "3d5a77b3829f7624a7acd6a67a20a19d",
".git/objects/fe/af164db1bd4113b6fbfd8435c699975b235a4a": "654f8db5cb67711b49346d9925e8e6aa",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "132942dab3f00c714bb887816c1cebe3",
".git/refs/remotes/origin/main": "132942dab3f00c714bb887816c1cebe3",
"assets/AssetManifest.bin": "0de06d73a93af8a3495755168976231f",
"assets/AssetManifest.bin.json": "7ff6e857dddd66c9540128b16de57081",
"assets/AssetManifest.json": "f82264c246571c07c2097f7e0b74fcd7",
"assets/assets/fonts/Inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/assets/fonts/Inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/assets/fonts/Inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/assets/fonts/Inter/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/assets/images/Admin.svg": "04e848f8f484417eea06b36b6874e01b",
"assets/assets/images/create_report_modal.svg": "7f4898b93123a79a2b2cc2980a2f90b3",
"assets/assets/images/dollar_sign.svg": "46fbf8281c58fa69b24c6e0a56af402a",
"assets/assets/images/es.svg": "6a721ad22b72bee2bf62306538474a7d",
"assets/assets/images/favicon.ico": "0e7f1f4736ba4da0103aa4663d78c400",
"assets/assets/images/icon_add.svg": "b2c2e4f0f01b12ea2199f5af67cdca49",
"assets/assets/images/icon_admin_red.svg": "89e6473a4e7aa4a11694292d787cdb28",
"assets/assets/images/icon_alert.svg": "6a5e67286aeadf31b608373770d7e748",
"assets/assets/images/icon_alert_bell.svg": "283125fc6317caa578d8fa1849d88cd5",
"assets/assets/images/icon_alert_circle.svg": "19b522af7819bcb3e2c02ea33430fb03",
"assets/assets/images/icon_alert_list_x.svg": "06e643ff4c650fac0ed5cde5e9899601",
"assets/assets/images/icon_alert_red.svg": "8f049147e6bace5c5a60807a5c2e58c3",
"assets/assets/images/icon_arrow_down.svg": "4c44bc3ad0abd5b517d4f4d0d971e107",
"assets/assets/images/icon_arrow_left_disabled.svg": "b29670175a06f7ef2c46dc86b4bc39a1",
"assets/assets/images/icon_arrow_left_enabled.svg": "6e386f92b4ca6baf5e40914b845c24b6",
"assets/assets/images/icon_arrow_right_disabled.svg": "aa8b47b84bfdf6da5401eeba40489126",
"assets/assets/images/icon_arrow_right_enabled.svg": "92849d5429f8a9474b2aa1e419e6e0ad",
"assets/assets/images/icon_arrow_up.svg": "6164ba67bb0e6102c2d3a058d908f91f",
"assets/assets/images/icon_bookmark.svg": "b3fdccb7bbf5564eb5c6e5711a14402d",
"assets/assets/images/icon_briefcase.svg": "f83944f30200a1a3dd0a2a23998180f4",
"assets/assets/images/icon_cards.png": "a76e69e0bed1463cd14cf55188a96169",
"assets/assets/images/icon_cards.svg": "745f38d451d9f484784d76f062081486",
"assets/assets/images/icon_cards_gray.svg": "1f1144188830b3edd7ba16d189675269",
"assets/assets/images/icon_cards_red.svg": "e5a5009100c738122ce1867188cf648e",
"assets/assets/images/icon_cards_red_add.svg": "b347d0759eb3d1649b6d281991edd200",
"assets/assets/images/icon_cards_red_search.svg": "1996668ed79e56531ea1266fe3665516",
"assets/assets/images/icon_cards_white.svg": "228e3ac89da2e72936890181863a3213",
"assets/assets/images/icon_check.svg": "56e60034bf4854eff818a77efeca148a",
"assets/assets/images/icon_checkbox_checked_red.svg": "249015503895481f8d536dba0cc271d6",
"assets/assets/images/icon_checkbox_unchecked_gray.svg": "97924e3732fac5eb31b102b3b22d0559",
"assets/assets/images/icon_chevron_down.svg": "c8d4c975be81e00895a3c533ca90dad5",
"assets/assets/images/icon_clock.svg": "05fbee7be5bd1a36b69b7569ef690ef7",
"assets/assets/images/icon_close.png": "a24114ac677bf484e2d0ce5b421d4fa8",
"assets/assets/images/icon_close.svg": "39c39ca371c69291f524fce8c06fbce6",
"assets/assets/images/icon_column.svg": "7ff4dca076918082cca982b16fa06af2",
"assets/assets/images/icon_customer.png": "c9e66c4f1fbae542d5ab64b6f7d67be1",
"assets/assets/images/icon_customer_mobile.png": "fe10496a4d1f47b9e48225bd2a7bc505",
"assets/assets/images/icon_date_left_arrow_disabled.svg": "754a0f0e1c4bec42055450018a058e99",
"assets/assets/images/icon_date_left_arrow_enabled.svg": "43d1b6f38f33587ac6487f83fab4b7b5",
"assets/assets/images/icon_date_right_arrow_disabled.svg": "bfb134bc464227acff9e36160e778567",
"assets/assets/images/icon_date_right_arrow_enabled.svg": "0eb681286938522fb748ecb6956652f8",
"assets/assets/images/icon_delete.svg": "41922041bfcc8496155c74b5fa9b5195",
"assets/assets/images/icon_download.svg": "54ecedbae9f673c17d96ca1716d4c48a",
"assets/assets/images/icon_edit.svg": "8c9e49b9488bc265f3eceef761dfb613",
"assets/assets/images/icon_employee.svg": "0dcb646c53c56e5ade55afee3da8fd5a",
"assets/assets/images/icon_exchanger.svg": "f83944f30200a1a3dd0a2a23998180f4",
"assets/assets/images/icon_facebook.png": "e4a3f7bf6264f4733f24cc144fdeb1ca",
"assets/assets/images/icon_facebook.svg": "a85617eb7a7a4c19ddfbc461e096ec38",
"assets/assets/images/icon_fav_checked.svg": "ae0f8c8e386ae3d88891a4283aa14eee",
"assets/assets/images/icon_fav_unchecked.svg": "0c761134a083109921229dcba0a9fc86",
"assets/assets/images/icon_filter.svg": "7677ddd7b627e86ed513185be47eaccf",
"assets/assets/images/icon_filters_menu.svg": "e676341a574ea94204338beec4d487bd",
"assets/assets/images/icon_filter_active.svg": "d0d6e4342ba996d35db2a211db8631e7",
"assets/assets/images/icon_green_checked_circle.svg": "55388f38078fc09f1b4fb07044cc33cc",
"assets/assets/images/icon_groups.svg": "370c78f468da7d6a611ab5853341c1be",
"assets/assets/images/icon_groups_white.svg": "876c5136ef689e27410d97d3775d8f0f",
"assets/assets/images/icon_group_red.svg": "2137a40c84a83318e163c2f5f2b5045b",
"assets/assets/images/icon_instagram.svg": "71a43181bcc5092afb134f1d0934b83f",
"assets/assets/images/icon_language_white.svg": "6154a03641db7078d0ef004417d9d246",
"assets/assets/images/icon_link.svg": "acbe716949eb3c6074201bd65ee56c54",
"assets/assets/images/icon_linkedin.png": "d9e654053fce398b690cdf6f2e84713b",
"assets/assets/images/icon_list_item_checked.svg": "80acb9b84db5381e7b6259e30c89c446",
"assets/assets/images/icon_list_item_unchecked.svg": "41df108b92642977d753d1299ef00311",
"assets/assets/images/icon_locations.svg": "4ab859deb216e6f186166e9a0736e259",
"assets/assets/images/icon_logout.svg": "70a999ca1d41d9babefd8204b8d6d13b",
"assets/assets/images/icon_logout_white.svg": "e767f2c8ecc057ef35334fb055df0345",
"assets/assets/images/icon_machines_red.svg": "10947681c9b817cb9ed7f9d6d2ee2e18",
"assets/assets/images/icon_manage.svg": "4ff3f0b83e13e4e87565643b84fc72c7",
"assets/assets/images/icon_manage_red.svg": "b442b7c7ac5fb9bf7fa895434205791c",
"assets/assets/images/icon_nav_item_collapse_arrow.svg": "12c1a1dc8a234cbd074b5b037d6aa6c9",
"assets/assets/images/icon_nav_item_expand_arrow.svg": "23a49e57505c7c7827d96ddec446d900",
"assets/assets/images/icon_notarobot.png": "473d5467dcba883277f4e0e3fdae1788",
"assets/assets/images/icon_redline.svg": "1aa927820e0a796a815ad81a2c7b5219",
"assets/assets/images/icon_red_check.svg": "736c63a541be01d1671b83f596d5e07b",
"assets/assets/images/icon_reports.png": "68e8fc3cc3ca62ded1ca966a6577705d",
"assets/assets/images/icon_reports.svg": "9be1e05d03e14290c4bde60e6f537e67",
"assets/assets/images/icon_report_collection.svg": "74c19e3b154db704f949deef8ad2cfa0",
"assets/assets/images/icon_report_collection_red.svg": "b39afd87b1ba85552889591dd6260a8e",
"assets/assets/images/icon_report_creditcard.svg": "b7f27a8b8b84c8a1715b9156d6f41601",
"assets/assets/images/icon_report_creditcard_red.svg": "0a13f11d041cfc0d3fc0609fcefa456e",
"assets/assets/images/icon_report_employeehours.svg": "13a8a7c31cc7ba89dbad654f64066a14",
"assets/assets/images/icon_report_employeehours_red.svg": "51b8e72b2d13965a9e88fdcd7063c589",
"assets/assets/images/icon_report_folder_dropdown.svg": "7c6034227b4b7884c61411e269567022",
"assets/assets/images/icon_report_schedule.svg": "2c9c54465ebe90726b6a4a485859b205",
"assets/assets/images/icon_report_schedule_white.svg": "fbad28ba3f66a34f4e97dc30b742cb61",
"assets/assets/images/icon_report_totals.svg": "1a104761cbbd0996c3a418ece7c5e4f0",
"assets/assets/images/icon_report_totals_red.svg": "0a7d7b982ec711f648f827ae1de942bf",
"assets/assets/images/icon_rep_date_drpdwn.svg": "eb6accbeeb7f171919cf3c7020a3d3b0",
"assets/assets/images/icon_rep_list_item_checked.svg": "28a75c0387a0bdce846baaa1c0b572e6",
"assets/assets/images/icon_rep_list_item_unchecked.svg": "78141cbd9322e92d5764129278a3b59d",
"assets/assets/images/icon_search.png": "9f71813f36074a98282469a7c58e7f2d",
"assets/assets/images/icon_search.svg": "7c9e12982f7b4a2df3339f1088fb6e05",
"assets/assets/images/icon_selection_down_arrow.svg": "6006976a5387da9d33be391d5851a86c",
"assets/assets/images/icon_selection_up_arrow.svg": "5e8a06dcea6790e30aab02edb52a3c64",
"assets/assets/images/icon_settings.png": "a056a9c9fb89988e082c30a9a19cb8e8",
"assets/assets/images/icon_settings.svg": "7fd0414c51cfa64bec21ae22dfaee11e",
"assets/assets/images/icon_sort.svg": "e676341a574ea94204338beec4d487bd",
"assets/assets/images/icon_status.png": "c696433242b51e76b53c9c1b4aa4d9fd",
"assets/assets/images/icon_status.svg": "826b7af61d573b59736c238bcb8ae5ff",
"assets/assets/images/icon_stores.svg": "e4689cd594a5a6480c2255aa927162ca",
"assets/assets/images/icon_sync_red.svg": "786d84e0a92ea6fe62cfc25aca4e28e4",
"assets/assets/images/icon_sync_white.svg": "00a2541f491a46da319a6d09a607699f",
"assets/assets/images/icon_twitter.png": "dc056e9536e5815462108ecc2d9104c9",
"assets/assets/images/icon_upgrade.svg": "eaf2df0bcebd58402c007500bb6e77cb",
"assets/assets/images/icon_users.png": "be0cc73c2beb2a4f38e9806cc081987c",
"assets/assets/images/icon_x_twitter.svg": "d37cd8640df61a24ba426f8ab3dd5d1b",
"assets/assets/images/Language.svg": "81e84f56f79819af037d4fb545f57cfb",
"assets/assets/images/large_card_image.svg": "fd960b0fee239a64922ed9dc48125bd6",
"assets/assets/images/large_card_image_add.svg": "17775306d0757139cfc0f3165f7582ec",
"assets/assets/images/large_card_image_search.svg": "a1160f9b73f8ea8c033104728a786c1d",
"assets/assets/images/launchpage_background_desktop.svg": "f2d4c9cc380d79a437c2c630780a979c",
"assets/assets/images/laundrycard.svg": "bc1c67e253825384a4dfa2b2f0ec65d7",
"assets/assets/images/laundrycard_2.png": "b291e964df57f0123abaf41be06db4b5",
"assets/assets/images/laundrycard_3.svg": "48c76197597f86a5f9970b107d39c858",
"assets/assets/images/logo.svg": "17c5f74ac409b13d8ee8b2cb11678977",
"assets/assets/images/Logout.svg": "9a26daed9637c24ab96de654d9b32e39",
"assets/assets/images/logo_on_red.svg": "0432f1656600b033b7cb58dd74f31e20",
"assets/assets/images/Manage.svg": "28795d0efaeab2542001d890d2b1960b",
"assets/assets/images/Store.svg": "588a9c333434858688d151ec17f16826",
"assets/assets/images/StoreGroup.svg": "8ac8f627db537c863e50f469f91226ec",
"assets/assets/images/Sync.svg": "772b190ac18ec60ca8809f6301a5b622",
"assets/assets/images/test_create_report.svg": "7f4898b93123a79a2b2cc2980a2f90b3",
"assets/assets/images/us.svg": "cff4c9486ce80e7e44967965cc5381e6",
"assets/FontManifest.json": "3940c92873e8056879442f02c5d45d25",
"assets/fonts/MaterialIcons-Regular.otf": "62bf5740e29cca754e58e078df9af297",
"assets/NOTICES": "c55fc22946e01f0a7a4509ce375f7167",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5bf3eb39a9e3f0c85ff1dd5d7b84bdbe",
"icons/favicon.png": "0e7f1f4736ba4da0103aa4663d78c400",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dee0b2727f6271265fb5dff9c1575c1e",
"/": "dee0b2727f6271265fb5dff9c1575c1e",
"main.dart.js": "02a8355e1fbe007f99cc1f9942597f13",
"manifest.json": "2f1e0bf146700ec9bdf983b5fca6a824",
"Spinning%20line.gif": "6990236fc8f806fca519d11a6a0d23d2",
"version.json": "c7af8fa71bc5e9587a2e4453b34fddc6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
