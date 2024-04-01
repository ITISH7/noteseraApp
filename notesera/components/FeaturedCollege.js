import { View,Text, TouchableOpacity, ScrollView } from "react-native"
import { themeColors } from "../themes"
import YearCard from "./YearCard"

const FeaturedCollege =({title , description,image})=>{
    return(<View>
        <View className="flex-row justify-between items-center px-4">
            <View>
                <Text className="font-bold text-lg">{title}</Text>
                <Text className="text-gray-500 text-xs">
                    {description}
                </Text>
            </View>
            <TouchableOpacity>
                <Text style={{color:themeColors.text}} className="font-semibold">See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
            padding:15
        }} className="overflow-visible">
            <YearCard year="1st Year" image={image}/>
            <YearCard year="2nd Year" image={image}/>
            <YearCard year="3rd Year" image={image}/>
            <YearCard year="4th Year" image={image}/>
        </ScrollView>
    </View>)
}
export default FeaturedCollege