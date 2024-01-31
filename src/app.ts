import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { INestApplication } from "@nestjs/common";

function setSwagger(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle("Demo API")
		.setDescription("The cats API description")
		.setVersion("1.0")
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup("docs", app, document);
}

export async function createApp() {
	const app = await NestFactory.create(AppModule);
	setSwagger(app);
	return app;
}
