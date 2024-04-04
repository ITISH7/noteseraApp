import { useNavigation, useRoute } from "@react-navigation/native"
import { Text, View, TouchableOpacity } from "react-native"
import { Image } from "react-native"
import * as Icon from 'react-native-feather';
import { themeColors } from "../themes";

const SubjectScreen = () => {
    const { params } = useRoute()
    const subjectData = params
    const navigate = useNavigation()

    return (<View>
        <View className="relative">
            <Image className="w-full h-56" source={{ uri: subjectData.subjectImage }}></Image>
            <TouchableOpacity onPress={() => {
                navigate.goBack()
            }}
                className="absolute top-10 left-2 bg-gray-50 rounded-full shadow p-2">
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}></Icon.ArrowLeft>
            </TouchableOpacity>
        </View>
        <View style={{ borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
                className="bg-white -mt-8 pt-0">
                <View className="px-5">
                    <Text className="text-2xl font-bold text-center mt-0 ">Units</Text>
                </View>
            </View>

    </View>)
}
export default SubjectScreen