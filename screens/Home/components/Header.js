import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Logo, Plus, Heart, Messenger, Dm } from "../../../Icons";

function Header() {
  return (
    <View 
        style={styles.header}
    >
        <Logo
            fill="#000"
        />
        <View style={styles.actions}>
            <TouchableOpacity
                activeOpacity={0.6}
            >
                <Plus
                    size={24}
                    fill={"#000"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
            >
                <Heart
                    size={24}
                    stroke={"#000"}
                    fill={"transparent"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.6}
            >
                <Dm
                    size={24}
                    fill={"#000"}
                />
            </TouchableOpacity>
        </View>

        
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 31,
        flexDirection: "row",
        alignItems: "center",   
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    actions: {
        flexDirection: "row",
        gap: 20,


    }

})