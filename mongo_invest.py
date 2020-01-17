from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)

mongo = PyMongo(app)

CORS(app)

@app.route('/api/get_data/', methods=['GET'])
def get_data():
    invest = mongo.db.invest
    result = []
    
    for field in invest.find():
        result.append({"InvestmentId":field['InvestmentId'], "Region":field["Region"], "Investment Name":field["Investment Name"], "Deal Status":field["Deal Status"]})
    return jsonify(result)

@app.route('/api/add_data/', methods=['POST'])
def add_data():
    invest = mongo.db.invest
    invest_id = request.get_json()['InvestmentId']
    region = request.get_json()['Region']
    invest_name = request.get_json()['Investment Name']
    deal_status = request.get_json()['Deal Status']

    response = invest.insert({
        'InvestmentId':invest_id,
        'Region':region,
        'Investment Name':invest_name,
        'Deal Status':deal_status
    })

    result = {"result":"Registration success"}

    return result


@app.route('/api/user/', methods=['POST'])
def delete_task():
    id = request.get_json()['id']
    print(id)
    invest = mongo.db.invest
    response = invest.remove({"InvestmentId":{"$eq":id}})
    if response['n'] > 0:
        result = {'message':'record deleted'}
    else:
        result = {'message':'no record found'}
    
    return jsonify({'result':result})


@app.route('/api/update/', methods=['POST'])
def update_data():
    invest = mongo.db.invest
    invest_id = request.get_json()['InvestmentId']
    region = request.get_json()['Region']
    invest_name = request.get_json()['Investment Name']
    deal_status = request.get_json()['Deal Status']

    response = invest.update(
        { 'InvestmentId':invest_id},
        {"$set":{
        'Region':region,
        'Investment Name':invest_name,
        'Deal Status':deal_status
        }
    })

    if response['n'] > 0:
        result = {'message':'Update Successful'}
    else:
        result = {'message':'Update Error'}
    
    return jsonify({'result':result})
    

if __name__ == '__main__':
    app.run(debug=True)