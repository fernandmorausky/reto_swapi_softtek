import * as AWS from 'aws-sdk';

export default class DynamoDbAdapter {
    private docClient:AWS.DynamoDB.DocumentClient
    constructor(
        private readonly client = new AWS.DynamoDB(),
    ) { 
        this.docClient = new AWS.DynamoDB.DocumentClient({ service: this.client });
    }


    async  insertar(putParams: AWS.DynamoDB.DocumentClient.PutItemInput) {
        return this.docClient.put(putParams).promise()
    }

    async obtener(getParams: AWS.DynamoDB.DocumentClient.GetItemInput): Promise<any> {
        const res = await this.docClient.get(getParams).promise();
        if (!res) return null;
        return  res.Item;
    }
}