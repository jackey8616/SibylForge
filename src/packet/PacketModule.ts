import { Module } from '@nestjs/common';

import { NetService } from '@/service/NetService';
import { PlayerService } from '@/service/PlayerService';

import { PacketGateway } from './PacketGateway';
import { PacketService } from './PacketService';
import { NetPacketHandler } from './handler/net/NetPacketHandler';
import { LoginPacketHandler } from './handler/net/LoginPacketHandler';
import { PlayerPacketHandler } from './handler/player/PlayerPacketHandler';
import { ChatPacketHandler } from './handler/player/ChatPacketHandler';
import { LogoutPacketHandler } from './handler/net/LogoutPacketHandler';

@Module({
	providers: [
		PacketGateway,
		PacketService,
		NetService,
		PlayerService,

		NetPacketHandler,
		LoginPacketHandler,
		LogoutPacketHandler,
		PlayerPacketHandler,
		ChatPacketHandler,
	],
})
export class PacketModule {}
