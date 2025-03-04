'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b6ff6e341766c8a4e319cf05bd55e704",
"assets/AssetManifest.bin.json": "5465c8ba9031f2ddfe3f5cce1f63f395",
"assets/AssetManifest.json": "3f9b40aea0cce2122ff974fb9464bf89",
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
"assets/NOTICES": "7418ea80e8f35504104741741e023dc6",
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
"flutter_bootstrap.js": "497e7cbcf86db315b766f763609d1a3d",
"icons/favicon.png": "0e7f1f4736ba4da0103aa4663d78c400",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "720dec7c23e0a1866a05c97e105ace07",
"/": "720dec7c23e0a1866a05c97e105ace07",
"main.dart.js": "868f7ab22a2f8ad03c9e45b879a16e19",
"manifest.json": "2f1e0bf146700ec9bdf983b5fca6a824",
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
