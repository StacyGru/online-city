from rest_framework import serializers
from . import models


class ManufacturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Manufacturer
        fields = '__all__'


class DiagonalSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Diagonal
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


class CurvedScreenSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CurvedScreen
        fields = '__all__'


class ConnectorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Connectors
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


class CaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Case
        fields = '__all__'


class ProcessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Processor
        fields = '__all__'


class MotherboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Motherboard
        fields = '__all__'


class FanSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Fan
        fields = '__all__'


class MemorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Memory
        fields = '__all__'


class StorageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Storage
        fields = '__all__'


class VideoCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.VideoCard
        fields = '__all__'


class OpticalDriveSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OpticalDrive
        fields = '__all__'


class SoundAndNetworkCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SoundAndNetworkCard
        fields = '__all__'


class SystemUnitDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MonitorDetails
        fields = '__all__'


class MonitorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Monitor
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
