from django.contrib import admin
from . import models


class ManufacturerAdmin(admin.ModelAdmin):
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
    list_display = ('id', 'manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'frame_color', 'wall_mount', 'aspect_ratio')
    search_fields = ('id', 'manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'frame_color', 'wall_mount', 'aspect_ratio')
    filter_fields = ('manufacturer', 'diagonal', 'screen_resolution', 'matrix_type', 'update_frequency', 'curved_screen', 'frame_color', 'wall_mount', 'aspect_ratio')


class AmountOfRAMAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class ProcessorSeriesAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class HDDVolumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class SSDVolumeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class VideoCardAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('id', 'name')


class SystemUnitFiltersAdmin(admin.ModelAdmin):
    list_display = ('id', 'purpose', 'amount_of_ram', 'processor_series', 'hdd_volume', 'ssd_volume', 'video_card')
    search_fields = ('id', 'purpose', 'amount_of_ram', 'processor_series', 'hdd_volume', 'ssd_volume', 'video_card')
    filter_fields = ('id', 'purpose', 'amount_of_ram', 'processor_series', 'hdd_volume', 'ssd_volume', 'video_card')


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
admin.site.register(models.ScreenResolution, ScreenResolutionAdmin)
admin.site.register(models.MatrixType, MatrixTypeAdmin)
admin.site.register(models.UpdateFrequency, UpdateFrequencyAdmin)
admin.site.register(models.FrameColor, FrameColorAdmin)
admin.site.register(models.WallMount, WallMountAdmin)
admin.site.register(models.AspectRatio, AspectRatioAdmin)
admin.site.register(models.MonitorDetails, MonitorDetailsAdmin)

admin.site.register(models.AmountOfRAM, AmountOfRAMAdmin)
admin.site.register(models.ProcessorSeries, ProcessorSeriesAdmin)
admin.site.register(models.HDDVolume, HDDVolumeAdmin)
admin.site.register(models.SSDVolume, SSDVolumeAdmin)
admin.site.register(models.VideoCard, VideoCardAdmin)
admin.site.register(models.SystemUnitFilters, SystemUnitFiltersAdmin)

admin.site.register(models.Keyboard, KeyboardAdmin)
admin.site.register(models.Mouse, MouseAdmin)
admin.site.register(models.Speakers, SpeakersAdmin)
admin.site.register(models.ComputerKitDetails, ComputerKitDetailsAdmin)

admin.site.register(models.Product, ProductAdmin)
