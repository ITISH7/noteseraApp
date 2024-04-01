import { Text, TouchableWithoutFeedback, View,Image,StyleSheet,Platform } from "react-native"
import * as Icon from 'react-native-feather';
import { themeColors } from "../themes";
const YearCard=({year ,image})=>{
return(<TouchableWithoutFeedback>
    <View className="mr-6 bg-white rounded-3xl shadow-xl" style={style.card} >
        <Image className='h-36 w-64 rounded-t-3xl' source={{uri:image}}/>
        <View className="px-3 pb-4 space-y-2">
            <Text className="text-lg font-bold pt-2">{year}</Text>
        </View>
        <View className="flex-row items-center justify-between space-x-1">
            <View className="flex-row items-center space-x-1">
            <Icon.Folder height={20} width={20}stroke={"orange"}/>
            <Text className ="text-xs">
                <Text className ="text-green-800">10 subjects</Text>
                <Text className ="text-gray-700"> (4.1k reviews)</Text>
            </Text>
            </View>
            <Icon.ArrowRightCircle height={20} width={20}stroke={"orange"} strokeWidth={2} />
        </View>
    </View>
</TouchableWithoutFeedback>)
}

const style= StyleSheet.create({
    card:{
        shadowColor:themeColors.bgColor(0.2),
        shadowRadius:7,
        elevation: Platform.OS === "android" ? 40 : 0,
    }
})

export default YearCard