from rest_framework import serializers
from . import models


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Manufacturer
        fields = '__all__'


class ScreenResolutionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ScreenResolution
        fields = '__all__'


class MatrixTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MatrixType
        fields = '__all__'


class UpdateFrequencySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UpdateFrequency
        fields = '__all__'


class FrameColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.FrameColor
        fields = '__all__'


class WallMountSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WallMount
        fields = '__all__'


class AspectRatioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AspectRatio
        fields = '__all__'


class MonitorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MonitorDetails
        fields = '__all__'


class AmountOfRAMSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AmountOfRAM
        fields = '__all__'


class ProcessorSeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ProcessorSeries
        fields = '__all__'


# class HDDVolumeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.HDDVolume
#         fields = '__all__'
#
#
# class SSDVolumeSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.SSDVolume
#         fields = '__all__'


class VideoCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.VideoCard
        fields = '__all__'


class SystemUnitDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SystemUnitDetails
        fields = '__all__'


class KeyboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Keyboard
        fields = '__all__'


class MouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Mouse
        fields = '__all__'


class SpeakersSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Speakers
        fields = '__all__'


class ComputerKitDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ComputerKitDetails
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = '__all__'
