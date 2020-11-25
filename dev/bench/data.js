window.BENCHMARK_DATA = {
  "lastUpdate": 1606315855179,
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
      }
    ]
  }
}