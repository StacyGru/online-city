from django.contrib import admin
from . import models


class ManufacturerAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class DiagonalAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class ScreenResolutionAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class MatrixTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class UpdateFrequencyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class CurvedScreenAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class ConnectorsAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class FrameColorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class WallMountAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class AspectRatioAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class MonitorDetailsAdmin(admin.ModelAdmin):
    list_display = ('id', 'manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'connectors', 'frame_color', 'wall_mount', 'aspect_ratio')
    search_fields = ('id', 'manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'connectors', 'frame_color', 'wall_mount', 'aspect_ratio')
    filter_fields = ('manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'connectors', 'frame_color', 'wall_mount', 'aspect_ratio')


class CaseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class ProcessorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class MotherboardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class FanAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class MemoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class StorageAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class VideoCardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class OpticalDriveAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class SoundAndNetworkCardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class SystemUnitDetailsAdmin(admin.ModelAdmin):
    list_display = ('id', 'case', 'processor', 'motherboard', 'fan', 'memory', 'storage', 'video_card', 'optical_drive', 'sound_and_network_card')
    search_fields = ('id', 'case', 'processor', 'motherboard', 'fan', 'memory', 'storage', 'video_card', 'optical_drive', 'sound_and_network_card')
    filter_fields = ('case', 'processor', 'motherboard', 'fan', 'memory', 'storage', 'video_card', 'optical_drive', 'sound_and_network_card')


class MonitorAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class KeyboardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class MouseAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class SpeakersAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class ComputerKitDetailsAdmin(admin.ModelAdmin):
    list_display = ('id', 'system_unit', 'monitor', 'keyboard', 'mouse', 'speakers')
    search_fields = ('id', 'system_unit', 'monitor', 'keyboard', 'mouse', 'speakers')
    filter_fields = ('system_unit', 'monitor', 'keyboard', 'mouse', 'speakers')


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'short_description', 'detailed_description', 'price', 'picture', 'category', 'computer_kit', 'system_unit', 'monitor')
    search_fields = ('id', 'name', 'short_description', 'detailed_description', 'price', 'picture', 'category', 'computer_kit', 'system_unit', 'monitor')
    filter_fields = ('name', 'short_description', 'detailed_description', 'price', 'picture', 'category', 'computer_kit', 'system_unit', 'monitor')


admin.site.register(models.Manufacturer, ManufacturerAdmin)
admin.site.register(models.Diagonal, DiagonalAdmin)
admin.site.register(models.ScreenResolution, ScreenResolutionAdmin)
admin.site.register(models.MatrixType, MatrixTypeAdmin)
admin.site.register(models.UpdateFrequency, UpdateFrequencyAdmin)
admin.site.register(models.CurvedScreen, CurvedScreenAdmin)
admin.site.register(models.Connectors, ConnectorsAdmin)
admin.site.register(models.FrameColor, FrameColorAdmin)
admin.site.register(models.WallMount, WallMountAdmin)
admin.site.register(models.AspectRatio, AspectRatioAdmin)
admin.site.register(models.MonitorDetails, MonitorDetailsAdmin)

admin.site.register(models.Case, CaseAdmin)
admin.site.register(models.Processor, ProcessorAdmin)
admin.site.register(models.Motherboard, MotherboardAdmin)
admin.site.register(models.Fan, FanAdmin)
admin.site.register(models.Memory, MemoryAdmin)
admin.site.register(models.Storage, StorageAdmin)
admin.site.register(models.VideoCard, VideoCardAdmin)
admin.site.register(models.OpticalDrive, OpticalDriveAdmin)
admin.site.register(models.SoundAndNetworkCard, SoundAndNetworkCardAdmin)
admin.site.register(models.SystemUnitDetails, SystemUnitDetailsAdmin)

admin.site.register(models.Monitor, MonitorAdmin)
admin.site.register(models.Keyboard, KeyboardAdmin)
admin.site.register(models.Mouse, MouseAdmin)
admin.site.register(models.Speakers, SpeakersAdmin)
admin.site.register(models.ComputerKitDetails, ComputerKitDetailsAdmin)

admin.site.register(models.Product, ProductAdmin)
