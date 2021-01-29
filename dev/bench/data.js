window.BENCHMARK_DATA = {
  "lastUpdate": 1611908789328,
  "repoUrl": "https://github.com/MikailBag/tokio",
  "entries": {
    "rt_multi_threaded": [
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/MikailBag/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606315854312,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 193201,
            "range": "± 39246",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 735376,
            "range": "± 47403",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5385305,
            "range": "± 728354",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20361040,
            "range": "± 2938625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8",
          "message": "docs: Add more comprehensive stream docs (#3286)\n\n* docs: Add more comprehensive stream docs\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>\r\n\r\n* Fix doc tests\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-17T11:46:09-05:00",
          "tree_id": "f7afa84006c8629a0d2c058b8e52042c54436203",
          "url": "https://github.com/MikailBag/tokio/commit/c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8"
        },
        "date": 1608224744522,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 186209,
            "range": "± 11846",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 700079,
            "range": "± 42653",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 5479921,
            "range": "± 784651",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 20421711,
            "range": "± 2394994",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/MikailBag/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608813489195,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 163423,
            "range": "± 33630",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 590048,
            "range": "± 61079",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4855621,
            "range": "± 984180",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 16714177,
            "range": "± 2849815",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/MikailBag/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608813996707,
        "tool": "cargo",
        "benches": [
          {
            "name": "chained_spawn",
            "value": 179898,
            "range": "± 34841",
            "unit": "ns/iter"
          },
          {
            "name": "ping_pong",
            "value": 624230,
            "range": "± 98077",
            "unit": "ns/iter"
          },
          {
            "name": "spawn_many",
            "value": 4336667,
            "range": "± 1119312",
            "unit": "ns/iter"
          },
          {
            "name": "yield_many",
            "value": 18615479,
            "range": "± 2611549",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_mpsc": [
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/MikailBag/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606315857891,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6459451,
            "range": "± 2112024",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6701235,
            "range": "± 1281995",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6095454,
            "range": "± 1889422",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 574,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 574,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 560,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 50604,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 823,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1125132,
            "range": "± 75120",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 810510,
            "range": "± 25444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8",
          "message": "docs: Add more comprehensive stream docs (#3286)\n\n* docs: Add more comprehensive stream docs\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>\r\n\r\n* Fix doc tests\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-17T11:46:09-05:00",
          "tree_id": "f7afa84006c8629a0d2c058b8e52042c54436203",
          "url": "https://github.com/MikailBag/tokio/commit/c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8"
        },
        "date": 1608224778979,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6750134,
            "range": "± 2541536",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6450508,
            "range": "± 1463587",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6208593,
            "range": "± 2177125",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 703,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 668,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 704,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 79279,
            "range": "± 6655",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1412,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1090788,
            "range": "± 55888",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 783629,
            "range": "± 53263",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/MikailBag/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608813511918,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 6818616,
            "range": "± 3271442",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6543785,
            "range": "± 1587185",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 6359306,
            "range": "± 2096494",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 664,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 661,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 661,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85711,
            "range": "± 5836",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1389,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1116094,
            "range": "± 28778",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 810432,
            "range": "± 37427",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/MikailBag/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608814023892,
        "tool": "cargo",
        "benches": [
          {
            "name": "contention_bounded",
            "value": 7150167,
            "range": "± 3450981",
            "unit": "ns/iter"
          },
          {
            "name": "contention_bounded_full",
            "value": 6948524,
            "range": "± 1940980",
            "unit": "ns/iter"
          },
          {
            "name": "contention_unbounded",
            "value": 7101770,
            "range": "± 2904843",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_000_medium",
            "value": 662,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "create_100_medium",
            "value": 666,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "create_1_medium",
            "value": 658,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "send_large",
            "value": 85152,
            "range": "± 47977",
            "unit": "ns/iter"
          },
          {
            "name": "send_medium",
            "value": 1448,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_bounded",
            "value": 1136816,
            "range": "± 86424",
            "unit": "ns/iter"
          },
          {
            "name": "uncontented_unbounded",
            "value": 810825,
            "range": "± 57425",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_semaphore": [
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/MikailBag/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606315865471,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 23406,
            "range": "± 10615",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1288,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 738,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 25057,
            "range": "± 12130",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1338,
            "range": "± 270",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8",
          "message": "docs: Add more comprehensive stream docs (#3286)\n\n* docs: Add more comprehensive stream docs\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>\r\n\r\n* Fix doc tests\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-17T11:46:09-05:00",
          "tree_id": "f7afa84006c8629a0d2c058b8e52042c54436203",
          "url": "https://github.com/MikailBag/tokio/commit/c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8"
        },
        "date": 1608224787937,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 15994,
            "range": "± 4138",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1101,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 662,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15943,
            "range": "± 2969",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1102,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/MikailBag/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608813479660,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 13586,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 913,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 540,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13519,
            "range": "± 2804",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 913,
            "range": "± 252",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/MikailBag/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608814095904,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 18513,
            "range": "± 6737",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 1062,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 629,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 15900,
            "range": "± 5127",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 1104,
            "range": "± 224",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ivanppetkov@gmail.com",
            "name": "Ivan Petkov",
            "username": "ipetkov"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f9765fb5f3a9d461c50124ac3e3f52c4901fc06",
          "message": "process: add missing drop child stdin to wait() (#3421)",
          "timestamp": "2021-01-28T23:08:44+01:00",
          "tree_id": "b76f705bf1718a1ed3f146dd3e27bdb1209e1e64",
          "url": "https://github.com/MikailBag/tokio/commit/1f9765fb5f3a9d461c50124ac3e3f52c4901fc06"
        },
        "date": 1611908788491,
        "tool": "cargo",
        "benches": [
          {
            "name": "contended_concurrent_multi",
            "value": 12840,
            "range": "± 2449",
            "unit": "ns/iter"
          },
          {
            "name": "contended_concurrent_single",
            "value": 813,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended",
            "value": 537,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_multi",
            "value": 13069,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended_concurrent_single",
            "value": 812,
            "range": "± 7",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "sync_rwlock": [
      {
        "commit": {
          "author": {
            "email": "github@max.sharnoff.org",
            "name": "Max Sharnoff",
            "username": "sharnoff"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de33ee85ce61377b316b630e4355d419cc4abcb7",
          "message": "time: replace 'ouClockTimeide' in internal docs with 'outside' (#3171)",
          "timestamp": "2020-11-24T10:23:20+01:00",
          "tree_id": "5ed85f95ea1846983471a11fe555328e6b0f5f6f",
          "url": "https://github.com/MikailBag/tokio/commit/de33ee85ce61377b316b630e4355d419cc4abcb7"
        },
        "date": 1606315870511,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1043,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14559,
            "range": "± 3447",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 1043,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14297,
            "range": "± 3735",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 586,
            "range": "± 53",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "luciofranco14@gmail.com",
            "name": "Lucio Franco",
            "username": "LucioFranco"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8",
          "message": "docs: Add more comprehensive stream docs (#3286)\n\n* docs: Add more comprehensive stream docs\r\n\r\n* Apply suggestions from code review\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>\r\n\r\n* Fix doc tests\r\n\r\nCo-authored-by: Alice Ryhl <alice@ryhl.io>",
          "timestamp": "2020-12-17T11:46:09-05:00",
          "tree_id": "f7afa84006c8629a0d2c058b8e52042c54436203",
          "url": "https://github.com/MikailBag/tokio/commit/c5861ef62fb0c1ed6bb8fe07a8e02534264eb7b8"
        },
        "date": 1608224792802,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 1078,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14506,
            "range": "± 4457",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 998,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14611,
            "range": "± 4107",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 600,
            "range": "± 142",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0deaeb84948f253b76b7fe64d7fe9d4527cd4275",
          "message": "chore: remove unused `slab` dependency (#3318)",
          "timestamp": "2020-12-22T21:56:22-08:00",
          "tree_id": "3b9ad84403d71b2ad5d2c749c23516c3dfaec3ce",
          "url": "https://github.com/MikailBag/tokio/commit/0deaeb84948f253b76b7fe64d7fe9d4527cd4275"
        },
        "date": 1608813491832,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 869,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 14562,
            "range": "± 4212",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 937,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 14103,
            "range": "± 3346",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 533,
            "range": "± 56",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@carllerche.com",
            "name": "Carl Lerche",
            "username": "carllerche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a66017f04985f5e7b7cb981e370e78a7291a5537",
          "message": "chore: prepare Tokio 1.0 release (#3319)",
          "timestamp": "2020-12-23T09:26:14-08:00",
          "tree_id": "a874909774c2fcbed6073262e4b2b789fbcb1b60",
          "url": "https://github.com/MikailBag/tokio/commit/a66017f04985f5e7b7cb981e370e78a7291a5537"
        },
        "date": 1608814094442,
        "tool": "cargo",
        "benches": [
          {
            "name": "read_concurrent_contended",
            "value": 838,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_contended_multi",
            "value": 12948,
            "range": "± 3272",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended",
            "value": 866,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "read_concurrent_uncontended_multi",
            "value": 13049,
            "range": "± 2831",
            "unit": "ns/iter"
          },
          {
            "name": "read_uncontended",
            "value": 490,
            "range": "± 10",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}