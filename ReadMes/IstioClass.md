#### Istio

##### Sticky Sessions

##### What is Consistent Hashing Useful For
- Feign equivalent for Node.js to be found, for header propagation.
- Using headers for consistent hashing may not be very good because each heather needs to be propagated.
- [] Envoy proxy issue 8167.
- General Consistent Hashing useful for: equally distributing balancing traffic.
- Sticky solution does not create a session, because pod that is hashed might fail.

##### Gateways
###### Ingress Gateways
- Kuberetes Ingress Resource and Istio Gateway are different
- In match conditions for a Virtual Service, the same level contions represents OR conditions.
```
  kind: Virutal Service
  ........
  http:
    - match:
      - uri: #IF
          prefix: "/experimental"
      - uri: #OR
          prefix: "/canary"
      route: #THEN
      - destination:
          host: fleetman-webapp
          subset: experimental
        weight: 100
    - match:
      - uri:
          prefix: "/"
      route:
        - destination:
            host: fleetman-webapp
            subset: original
```
#### Dark Releases
> Definition: We can deploy another version of the app and give it a different header when making requests to the back
> end, that header usually is only known by the developers, so it can be tested within the live server.
###### Header Routing Example:
```
kind: Virtual Service
...........
http:
  - name: "rule 1"
    match:
      - headers:
        my-header:
          exact: canary
      route:
      - destination:
          host: fleetman-webapp
          subset: experimental
  - name: "rule 2" #CATCH ALL
    route:
    - destination:
        host: fleetman-webapp
        subset: original
```
- If you do not write a matching condition to the rule, it becomes a catch all route.
