import * as React from 'react';
import { useState, useEffect } from 'react';
const opt = {
    "apiVersion": "networking.istio.io/v1alpha3",
    "kind": "VirtualService",
    "metadata": {
        "name": "tikitaka"
    },
    "spec": {
        "hosts": [
            "*"
        ],
        "gateways": [
            "tikitaka-gateway"
        ],
        "http": [
            {
                "route": [
                    {
                        "destination": {
                            "host": "tikitaka"
                        }
                    }
                ]
            }
        ]
    }
};
const Fetcher: React.FC<any>  = props => {
    const [virtualServices, addVirtualService] = useState<any[]>([]);
    const getContainers = async () => {
        let response = await fetch('http://localhost:8081/apis/apps/v1/namespaces/default/deployments/',{
            method: 'POST',
            body: JSON.stringify(opt)
        });
        let vS = await response.json();
        addVirtualService([...virtualServices, vS]);
    };
    useEffect(() => {getContainers()}
    , []);
        const result: any[] = [...virtualServices];
    return (
        <div>
            {result}
        </div>
    )
};

export default Fetcher;
