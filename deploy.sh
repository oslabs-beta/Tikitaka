docker build -t tikitaka1/general:latest -t tikitaka1/general:$SHA -f ./Dockerfile ./
docker push tikitaka1/general:latest
docker push armangurkan1/multi-client:$SHA
kubectl apply -f ./k8s
kubectl set image deployments/general-deployment general=tikitaka1/general:$SHA
