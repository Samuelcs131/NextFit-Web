import { illustrativeOptions } from '../enums/illustrativeOptions'
import FileIllustative from 'src/assets/img/illustration/file.svg'
import FolderIllustative from 'src/assets/img/illustration/folder.svg'
import CalendarIllustative from 'src/assets/img/illustration/calendar.svg'
import NotebookIllustative from 'src/assets/img/illustration/notebook.svg'
import SearchIllustative from 'src/assets/img/illustration/search.svg'
import DashboardIllustative from 'src/assets/img/illustration/dashboard.svg'
import EmptyIllustative from 'src/assets/img/illustration/empty.svg'

export const illustrativeMessageImage = {
  [illustrativeOptions.folder]: FolderIllustative,
  [illustrativeOptions.file]: FileIllustative,
  [illustrativeOptions.calendar]: CalendarIllustative,
  [illustrativeOptions.notebook]: NotebookIllustative,
  [illustrativeOptions.search]: SearchIllustative,
  [illustrativeOptions.dashboard]: DashboardIllustative,
  [illustrativeOptions.empty]: EmptyIllustative,
}
