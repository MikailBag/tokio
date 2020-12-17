window.BENCHMARK_DATA = {
  "lastUpdate": 1608224793676,
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
      }
    ]
  }
}