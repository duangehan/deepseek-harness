import type { SidebarBrandMarkOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'
import logoUrl from './assets/changxing-logo.png'

/**
 * Render the product mascot at the size requested by the host.
 * @param props - Host-supplied mark presentation.
 * @returns the product logo.
 */
export function OfficialBrandMark({ size }: SidebarBrandMarkOwnerProps) {
  return <img src={logoUrl} width={size} height={size} alt="" />
}

/**
 * Render the product name beside its independently slotted logo.
 * @returns the product name.
 */
export function OfficialBrandName() {
  return <span>{'长行智友'}</span>
}
