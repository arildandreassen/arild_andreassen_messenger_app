#!/usr/bin/env python

import asyncio
import websockets

connected = set()

PORT = 8765

async def handler(websocket):
    connected.add(websocket)
    try:
        async for message in websocket:
            print(message)
            for connection in connected:
                await connection.send(message)
    finally:
        connected.remove(websocket)



async def main():
    async with websockets.serve(handler, "localhost", PORT):
        print(f'server listening on PORT: {PORT}')
        await asyncio.Future()

asyncio.run(main())
