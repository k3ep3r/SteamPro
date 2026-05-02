from fastapi import FastAPI
import json

app = FastAPI(title="SteamPro Core")

@app.get("/api/v1/accounts")
async def get_accounts():
    with open('data/accounts_batch_01.json', 'r') as f:
        return json.load(f)

@app.get("/api/v1/crypto-signals")
async def get_signals():
    return {"pair": "BTC/USDT", "signal": "BUY", "confidence": "87%"}

@app.post("/api/v1/luckywheel/spin")
async def spin_wheel(user_id: str):
    return {"user": user_id, "prize": "100 Points", "status": "Success"}
