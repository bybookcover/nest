import { ApiProperty } from '@nestjs/swagger'
import  { modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions:{
        timestamps:true
    }
})
export class User{
    @ApiProperty({description:'用户名',example:'用户名1'})
    @prop()
    username:string

    @ApiProperty({description:'密码',example:'密码1'})
    @prop()
    password:string
}